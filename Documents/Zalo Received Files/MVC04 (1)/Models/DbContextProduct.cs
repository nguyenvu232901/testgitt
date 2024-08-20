
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
namespace MVC04.Models
{
    public class DbContextProduct : DbContext
    {
        public DbContextProduct(DbContextOptions<DbContextProduct> options) : base(options) { }
        public DbSet<tblProducts> tblProducts { get; set; }
        public DbSet<tblMember> tblMember {  get; set; }
        public DbSet<tblNhanXet> tblNhanXet {  get; set; }
        public async Task AddProductAsync(int productID, string productName, string imageUrl, int productPrice, string description)
        {
            var parameters = new[]
            {
                new SqlParameter("@ProductID", productID),
                new SqlParameter("@ProductName", productName),
                new SqlParameter("@ImageUrl", imageUrl),
                new SqlParameter("@ProductPrice", productPrice),
                new SqlParameter("@Description", description)
            };

            await Database.ExecuteSqlRawAsync("EXEC AddProduct @ProductID, @ProductName, @ImageUrl, @ProductPrice, @Description", parameters);
        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<tblNhanXet>()
                .HasOne(e => e.tblMember)
                .WithMany(e => e.tblNhanXets)
                .HasForeignKey(e => e.FK_MemberName)
                .OnDelete(DeleteBehavior.Cascade)
                .IsRequired();
            builder.Entity<tblNhanXet>()
                .HasOne(e => e.tblProducts)
                .WithMany(e => e.tblNhanXets)
                .HasForeignKey(e => e.FK_iProductID)
                .OnDelete(DeleteBehavior.Cascade)
                .IsRequired();
        }
    }
}
