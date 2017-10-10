﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using Reunion;
using System;

namespace Reunion.Migrations
{
    [DbContext(typeof(ImageDBContext))]
    [Migration("20170930210040_Update")]
    partial class Update
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.0-rtm-26452")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Reunion.CollegeImage", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ContentType");

                    b.Property<byte[]>("Data");

                    b.Property<int>("Height");

                    b.Property<int>("Length");

                    b.Property<string>("Name");

                    b.Property<int>("Width");

                    b.HasKey("Id");

                    b.ToTable("CollegeImages");
                });

            modelBuilder.Entity("Reunion.Image", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ContentType");

                    b.Property<byte[]>("Data");

                    b.Property<int>("Height");

                    b.Property<int>("Length");

                    b.Property<string>("Name");

                    b.Property<int>("Width");

                    b.HasKey("Id");

                    b.ToTable("Images");
                });

            modelBuilder.Entity("Reunion.MemoryImage", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ContentType");

                    b.Property<byte[]>("Data");

                    b.Property<int>("Height");

                    b.Property<int>("Length");

                    b.Property<string>("Name");

                    b.Property<int>("Width");

                    b.HasKey("Id");

                    b.ToTable("MemoryImages");
                });
#pragma warning restore 612, 618
        }
    }
}
