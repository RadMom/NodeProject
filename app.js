const express = require("express");

//express app
const app = express();

//register view-engine
app.set("view engine","ejs") //Setvame view-enjina da ni e ejs
//Po pravilo view engine-a ni gleda v papka views.Ako iskame papkata ni da ima drugo ime trqbva da napravimdolnoto neshto
//app.set("views","myviews");  Setveme views-ovete da sa ni v myviews ili kakto tam se kazva papkata ni.

//middleware and static files like css. Pokazvame kade da sa failovete koito da sa publichni. 
//Po tozi nachin vrazvame i styles.css i moje da go polzvame.
app.use(express.static("./public"))

//listen for requests
app.get("/", (req, res) => {
  //   res.send("<h1>Home Page</>");
  const blogs = [
    {title: 'Pepi FrontEnd-a', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Pepi BackEnd-a', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Pepi FullStack-a', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];
  res.render("index",{blogs});//Podavame obekt v koito e blogs kato vtori argument
});

app.get("/about", (req, res) => {
  // res.send("<h1>About Page</h1>")
  res.render("about");
});

app.get("/create",(req,res)=>{
    res.render("create");
});

//Izpalnqva se vinagi, no trqbva da stignem do tuk. From top to bottom!!! 
app.use((req, res) => {
  res.status(404).render("404");
});

app.listen(3000, () => {
  console.log("Server is live on port 3000...");
});
