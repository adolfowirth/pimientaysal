let menu = [

    {
      id: 1,
      nombre: "Carpaccio fresco",
      descripcion: "Entrada Carpaccio de salmón con cítricos",
      detalle: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      precio: "U$S 1.50",
      img: "../images/Carpaccio-de-salmon.jpg",
    },
    {
      id: 2,
      nombre: "Risotto de berenjena",
      descripcion: "Risotto de berenjena y queso de cabra",
      detalle: "Plato típico",
      precio:"U$S 47.05",
      img: "../images/Risotto-berenjena-queso-cabra.jpg",
    },
    {
      id: 3,
      nombre: "Mousse de arroz",
      descripcion: "Mousse de arroz con leche y aroma de azahar",
      detalle: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      precio: "U$S 200.25",
      img: "../images/Mousse-de-arroz-con-leche.jpg",
    },
    {
      id: 4,
      nombre: "Espárragos blancos",
      descripcion:"Espárragos blancos con vinagreta de verduras y jamón ibérico",
      detalle: "Plato típico",
      precio: "U$S 55",
      img: "../images/esparragos.png",
    },
  ];


const indexController = {

    index : (req, res) => {

        let about = {
            img: "../images/principal.jpg",
            alt: "SAbores que enamoran",
            titulo : "Pimienta & Sal desde cero",
            textoPrincipal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur" +
            "adipiscing elit, sed do eiusmod tempor incididunt ut labore et" + 
            "dolore magna aliqua. Ut enim ad minim veniam, quis nostrud" +
            "exercitation ullamco laboris nisi ut aliquip ex ea commodo" +
            "consequat. Duis aute iruredolor in reprehenderit in voluptate velit" +
            "esse cillum dolore eu fugiat nulla pariatur.We only use",
            textoPrincipal1: "seasonal",
            textoPrincipal2: "ingredients",
            textoFinal: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui" +
            "officia deserunt mollit anim id est laborum consectetur adipiscing" +
            "elit, sed do eiusmod temporincididunt ut labore et dolore magna" +
            "aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco" +
            "laboris nisi ut aliquip ex ea commodo consequat."
        }

        return res.render('index', { menu : menu , about: about})
    },

    detalle: (req, res) =>{
    let plato;

      menu.forEach(row =>{
        if(row.id == req.params.id){
          plato = row
        }
      });

      if(plato == null){
        plato = {
          id: 0,
          nombre: "Lo sentimos!",
          descripcion: "No pudimos encontrar tu plato",
          detalle: "",
          precio: "",
          img: "../images/noEncontrado.jpg",
        }
      }

      { return res.render('detalleMenu', { plato : plato});}
    }

}

module.exports = indexController;