import { ModeloProyecto } from "./proyecto.js";

const resolversProyecto = {
  Query: {
    Proyectos: async (parent, args) => {
      const proyectos = await ModeloProyecto.find()
      .populate('lider').populate('avances').populate('inscripciones');
      return proyectos;
    },
    // Arthur y Andy ******
    Proyecto: async (parent, args) => {
      const proyectos = await ModeloProyecto.findOne({_id: args._id})
      .populate('lider').populate('avances').populate('inscripciones');
      return proyectos;
    },
    
    //HISTORIA 14  REVISAR
    
    proyectosLiderado: async (parent, args)=>{
      const proyectoLiderado = await ModeloProyecto.find({lider: args._id})
      .populate('lider')
      .populate('avances').populate('inscripciones')
      console.log(proyectoLiderado)
      return proyectoLiderado
    }
    // Arthur y Andy ******
  },
  Mutation: {
    crearProyecto: async (parent, args) => {
      const ProyectoCreado = await ModeloProyecto.create({
        nombre: args.nombre,
        estado: args.estado,
        fase: args.fase,
        fechaInicio: args.fechaInicio,
        fechaFin: args.fechaFin,
        presupuesto: args.presupuesto,
        lider: args.lider,
        objetivos: args.objetivos,
      })
      return ProyectoCreado;
    },

    // Arthur y Andy ******
    //HISTORIA 14

    crearObjetivo: async (parents, args)=>{
      const proyectoConObjetivo =await ModeloProyecto.findByIdAndUpdate(args._id,{
        nombre:args.nombre,
        presupuesto: args.presupuesto,
        $addToSet : {
          objetivos:{
            descripcion: args.descripcion,
            tipo: args.tipo,
          },
        },
      },{new: true}
      )
      return proyectoConObjetivo
    },

    /*actualizarProyectoActivo: async (parent, args) => {
      const actualizarProyectoActivo = await ModeloProyecto.findByIdAndUpdate(args.idProyecto,{
        nombre: args.nombre,
        presupuesto: args.presupuesto,
        $addToSet:{
          objetivos:{
            descripcion:args.descripcion,
            tipo: args.tipo,
          }
        }
      },
      {new:true})
      return actualizarProyectoActivo;
    },*/

    // Arthur y Andy ******
  },
};

export { resolversProyecto };
