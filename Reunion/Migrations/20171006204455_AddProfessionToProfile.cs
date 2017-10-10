using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Reunion.Migrations
{
    public partial class AddProfessionToProfile : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PlaceHolder1",
                table: "Profile");

            migrationBuilder.AddColumn<string>(
                name: "Profession",
                table: "Profile",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Profession",
                table: "Profile");

            migrationBuilder.AddColumn<string>(
                name: "PlaceHolder1",
                table: "Profile",
                nullable: true);
        }
    }
}
