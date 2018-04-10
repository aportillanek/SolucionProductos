using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using SolucionProductosAngular.AccesoDatos.AccesoDatos.Models;
using SolucionProductosAngular.AccesoDatos.Models;

namespace SolucionProductosAngular.Repositorios.Repositorio
{
    public class ProductoRepositorio : IProductoRepositorio
    {
        public async Task<bool> EliminarProductoPorIDAsync(int id)
        {
            using (PrincipalDBContext db=new PrincipalDBContext())
            {
                Productos producto = db.Productos.Where(x => x.Id == id).FirstOrDefault();
                if(producto !=null)
                {
                    db.Productos.Remove(producto);
                }
                return await db.SaveChangesAsync() >= 1;
            }
        }

        public async Task<bool> GuardarProducto(Productos producto)
        {
            using (PrincipalDBContext db = new PrincipalDBContext())
            {
                Productos productos = db.Productos.Where(x => x.Id == producto.Id).FirstOrDefault();
                if(productos ==null)
                {
                    productos = new Productos()
                    {
                        Id = producto.Id,
                        Precio = producto.Precio,
                        ProductName = producto.ProductName
                    };
                    db.Productos.Add(producto);
                }
                else
                {
                    productos.Id = producto.Id;
                    productos.Precio = producto.Precio;
                    productos.ProductName = producto.ProductName;

                }
                return await db.SaveChangesAsync() >= 1;
            }
        }

        public async Task<List<Productos>> ObtenerTotalProductos()
        {
            using (PrincipalDBContext db=new PrincipalDBContext())
            {
                return await (from a in db.Productos
                              select new Productos
                              {
                                  Id = a.Id,
                                  Precio = a.Precio,
                                  ProductName = a.ProductName
                              }).ToListAsync();

            }
        }

        public Productos ObtenerProductosPorId(int id)
        {
            using ( PrincipalDBContext db=new PrincipalDBContext())
            {
                Productos productos = db.Productos.Where(x => x.Id == id).FirstOrDefault();
                return  productos ;

            }

        }
    }
}
