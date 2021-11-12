import conectarBD from './db/db';
import { UserModel } from './models/user';
import { Enum_Rol, Enum_TipoObjetivo } from './models/enums';
import { ProjectModel } from './models/project';
import {ObjectId} from 'mongoose';
import { ObjectiveModel } from './models/objective';

const main = async () => {
    await conectarBD();

/*     const objet = await ObjectiveModel.create({
        descripcion: 'Este es el objetivo especifico',
        tipo: Enum_TipoObjetivo.especifico,
    }) ;*/
/*      await ProjectModel.create({
        nombre: 'Proyecto 5',
        presupuesto: 120,
        fechaInicio: Date.now(),
        fechaFin: new Date('2022/11/10'),
        lider: '618d198c94e1cfdf36821a62',
        objetivos: ['618e522b533942e0346c7082', '618e52437de23e3a753026a3'], 
        
    });   */

     const proyecto = await ProjectModel.find({ nombre: 'Proyecto 5'}).populate('lider').populate('objetivos');
    console.log('el proyecto es: ', JSON.stringify(proyecto)); 

    /* const lider = await UserModel.find({_id: proyecto[0].lider});
    console.log('el lider del proyecto es: ', lider); */ 
};

main();

///////// CRUD USUARIOS ///////////

    //CREAR USUARIO
 /*        await UserModel.create({
           apellido: 'Calderon',
           correo: 'paula150995@hotmail.com',
           identificacion: '84787875',
           nombre: 'Paula',
           rol: Enum_Rol.administrador,
       })
           .then((u) => {
               console.log('Usuario creado', u);
           })
           .catch((e) => {
               console.log('Error creando el usuario', e);
           });  */

    //OBTENER LOS USUARIO
    /*     await UserModel.find().then((u) => {
            console.log('usuarios', u);
        })
            .catch((e) => {
                console.log('error obteniendo los datos'), e;
            }); */
    //OBTENER UN SOLO USUARIO
    /* await UserModel.findOne({ identificacion: '1234'})
    .then((u) => {
        console.log('usuario encontrado', u);
    })
    .catch((e) => {
        console.log(e);
        
    }) */
    //EDITAR UN USUARIO
    /* await UserModel.findOneAndUpdate(
        { correo: 'paula150995@hotmail.com' },
        {
            nombre: 'Andrea',
            apellido: 'Lesmes',
        }
    )
    .then((u) => {
        console.log('usuario actualizado', u);     
    })
    .catch((e) => {
        console.log('error actulizando usuario', e);
        
    }) */
    //ELIMINAR USUARIO
    /* await UserModel.findOneAndDelete({ correo: 'paula150995@hotmail.com'})
    .then((u) => {
        console.log('usuario eliminado', u);
    })
    .catch((e) => {
        console.log(e);
         
    })*/