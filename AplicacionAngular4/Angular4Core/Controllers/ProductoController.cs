using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SolucionProductosAngular.Repositorios;
using SolucionProductosAngular.AccesoDatos.Models;



namespace SolucionProductosAngular.PresentacionWebApi.Controllers
{
    public class ProductoController : BaseController
    {
        public ProductoController(IProductoRepositorio productoRepositorio) : base(productoRepositorio)
        {
        }

        public IActionResult Index()
        {
            return View();
        }
        [HttpGet, Produces("application/json")]
        public async Task<IActionResult> ObtenerProductos()
        {
            var data = await _productoRepositorio.ObtenerTotalProductos();
            return Json(new { result = data });

        }
        [HttpGet, Produces("application/json")]
        public IActionResult ObtenerProductosPorId(int id)
        {
            return Json(_productoRepositorio.ObtenerProductosPorId(id));

        }
        [HttpPost, Produces("application/json")]
        public async Task<IActionResult> GuardarProducto([FromBody] Productos productos)
        {

            return Json(await _productoRepositorio.GuardarProducto(productos));
        }
        [HttpDelete]
        public async Task<IActionResult> EliminarProducto(int id)
        {

            return Json(await _productoRepositorio.EliminarProductoPorIDAsync(id));
        }


    }
}