using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reunion
{
    public class ImageDBContext : DbContext
    {
        public static string DefaultConnectionString { get; set; }

        public string ConnectionString { get; } = DefaultConnectionString;

        public ImageDBContext(string connectionString = null)
        {
            if (!string.IsNullOrWhiteSpace(connectionString))
            {
                this.ConnectionString = connectionString;
            }
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(ConnectionString);
        }

        public virtual DbSet<Image> Images { get; set; }
        public virtual DbSet<CollegeImage> CollegeImages { get; set; }

        public virtual DbSet<MemoryImage> MemoryImages { get; set; }
        public virtual DbSet<Profile> Profile { get; set; }


    }
}
