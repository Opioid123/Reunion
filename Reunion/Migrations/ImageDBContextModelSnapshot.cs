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
    partial class ImageDBContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
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

            modelBuilder.Entity("Reunion.Profile", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Activated");

                    b.Property<bool>("Admin");

                    b.Property<string>("Branch");

                    b.Property<string>("Code");

                    b.Property<string>("Email");

                    b.Property<string>("FirstName");

                    b.Property<Guid>("ImageId");

                    b.Property<string>("LastName");

                    b.Property<string>("Location");

                    b.Property<string>("MiddleInitial");

                    b.Property<string>("PhoneNumber");

                    b.Property<string>("PlaceHolder3");

                    b.Property<string>("Profession");

                    b.Property<string>("RollNumber");

                    b.Property<string>("Story");

                    b.Property<string>("YearOfJoining");

                    b.HasKey("Id");

                    b.ToTable("Profile");
                });
#pragma warning restore 612, 618
        }
    }
}
