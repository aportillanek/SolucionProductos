using SolucionProductosAngular.AccesoDatos.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SolucionProductosAngular.Repositorios
{
     public  interface IProductoRepositorio
    {
        Task<List<Productos>> ObtenerTotalProductos();
        Task<bool> GuardarProducto(Productos producto);
        Task<bool> EliminarProductoPorIDAsync(int id);
         Productos ObtenerProductosPorId(int id);
    }
}
