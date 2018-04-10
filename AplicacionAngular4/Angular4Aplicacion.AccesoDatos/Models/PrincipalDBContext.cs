using Microsoft.EntityFrameworkCore;
using SolucionProductosAngular.AccesoDatos.Models;

namespace SolucionProductosAngular.AccesoDatos.AccesoDatos.Models
{
     public partial  class PrincipalDBContext :DbContext
    {
        public virtual DbSet<Productos> Productos { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
              if(!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(@"Server=.;Database=ProductoDB ;Trusted_Connection=True; MultipleActiveResultSets=True");

            }

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Productos>(entity =>
            {

                entity.HasKey(e => e.Id);
                entity.Property(e => e.ProductName).HasMaxLength(50).IsUnicode(false);
                entity.Property(e => e.Precio);
            });


        }

    }
}
