using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SolucionProductosAngular.Repositorios;
using SolucionProductosAngular.AccesoDatos.Models;



namespace SolucionProductosAngular.PresentacionWebApi.Controllers
{
    public class ProductoController : Controller
    {
        public IProductoRepositorio productoRepositoriofinal;

        public ProductoController(IProductoRepositorio productoRepositorio)
        {
            productoRepositoriofinal = productoRepositorio;
        }

        public IActionResult Index()
        {
            return View();
        }
        [HttpGet, Produces("application/json")]
        public async Task<IActionResult> ObtenerProductos()
        {
            var data = await productoRepositoriofinal.ObtenerTotalProductos();
            return Json(new { result = data });

        }
        [HttpGet, Produces("application/json")]
        public IActionResult ObtenerProductosPorId(int id)
        {
            return Json(productoRepositoriofinal.ObtenerProductosPorId(id));

        }
        [HttpPost, Produces("application/json")]
        public async Task<IActionResult> GuardarProducto([FromBody] Productos productos)
        {

            return Json(await productoRepositoriofinal.GuardarProducto(productos));
        }
        [HttpDelete]
        public async Task<IActionResult> EliminarProducto(int id)
        {

            return Json(await productoRepositoriofinal.EliminarProductoPorIDAsync(id));
        }


    }
}