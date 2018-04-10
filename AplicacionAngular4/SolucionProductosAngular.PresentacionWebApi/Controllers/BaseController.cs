using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SolucionProductosAngular.Repositorios;

namespace SolucionProductosAngular.PresentacionWebApi.Controllers
{
    [Produces("application/json")]
    public class BaseController : Controller
    {
        public IProductoRepositorio _productoRepositorio;

        public BaseController(IProductoRepositorio productoRepositorio)
        {
            _productoRepositorio = productoRepositorio;
        }
    }
}