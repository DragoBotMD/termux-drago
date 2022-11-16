importar  fs  desde  'fs'
 ruta de importación ,  {  dirname  }  desde  'ruta'
importar  afirmar  desde  'afirmar'
importar  {  spawn  }  desde  'child_process'
importar  syntaxError  de  'syntax-error'
importar  {  fileURLToPath  }  desde  'url'
importar  {  createRequire  }  desde  'módulo'
const  __filename  =  fileURLToPath ( import . meta . url )
const  __dirname  =  dirname ( __filename )
const  require  =  createRequire ( __dirname )
dejar  carpetas  =  [ '.' , ... Objeto . claves ( requerir ( ruta . unirse ( __dirname ,  './paquete.json' ) ) . ​​directorios ) ]
dejar  archivos  =  [ ]
for  ( let  carpeta  de  carpetas )
for  ( let  archivo  de  fs . readdirSync ( carpeta ) . filtro ( v  =>  v . termina con ( '.js' ) ) )
archivos _ empujar ( ruta . resolver ( ruta . unir ( carpeta ,  archivo ) ) )
for  ( let  archivo  de  archivos )  {
si  ( archivo  ==  __nombre de archivo )  continuar
consola _ error ( 'Comprobando' ,  archivo )
const  error  =  syntaxError ( fs . readFileSync ( archivo ,  'utf8' ) ,  archivo ,  {
sourceType : 'módulo' ,
allowReturnOutsideFunction : verdadero ,
allowAwaitOutsideFunction : verdadero
} )
si  ( error )  afirmar . ok ( error . longitud  <  1 ,  archivo  +  '\n\n'  +  error )
afirmar _ bien ( archivo )
consola _ log ( 'Terminado' ,  archivo )
}
