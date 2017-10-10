using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Reunion.Migrations
{
    public partial class AddAdminToProfile : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PlaceHolder2",
                table: "Profile");

            migrationBuilder.AddColumn<bool>(
                name: "Admin",
                table: "Profile",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Admin",
                table: "Profile");

            migrationBuilder.AddColumn<string>(
                name: "PlaceHolder2",
                table: "Profile",
                nullable: true);
        }
    }
}
