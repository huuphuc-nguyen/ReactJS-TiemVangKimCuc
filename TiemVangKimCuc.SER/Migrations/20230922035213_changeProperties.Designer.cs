﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WebTiemVangKimCuc.SER.Infrastructure;

#nullable disable

namespace WebTiemVangKimCuc.SER.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20230922035213_changeProperties")]
    partial class changeProperties
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.10")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("WebTiemVangKimCuc.SER.Domain.Entities.DanhMuc.DmChatLieu", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("ChatLieu")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MoTa")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("DM_CHAT_LIEU", (string)null);
                });

            modelBuilder.Entity("WebTiemVangKimCuc.SER.Domain.Entities.DanhMuc.DmTrangSuc", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("LoaiTrangSuc")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MoTa")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("DM_TRANG_SUC", (string)null);
                });

            modelBuilder.Entity("WebTiemVangKimCuc.SER.Domain.Entities.SanPham", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<int>("ChatLieuId")
                        .HasColumnType("int")
                        .HasColumnName("ChatLieu_ID");

                    b.Property<DateTime?>("CreatedDate")
                        .HasColumnType("datetime");

                    b.Property<string>("ImgUrl")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsDeleted")
                        .HasMaxLength(1)
                        .IsUnicode(false)
                        .HasColumnType("bit")
                        .IsFixedLength();

                    b.Property<int>("LoaiTrangSucId")
                        .HasColumnType("int")
                        .HasColumnName("LoaiTrangSuc_ID");

                    b.Property<string>("MoTa")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TenSanPham")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TrongLuongSanPham")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("ChatLieuId");

                    b.HasIndex("LoaiTrangSucId");

                    b.ToTable("SAN_PHAM", (string)null);
                });

            modelBuilder.Entity("WebTiemVangKimCuc.SER.Domain.Entities.SanPham", b =>
                {
                    b.HasOne("WebTiemVangKimCuc.SER.Domain.Entities.DanhMuc.DmChatLieu", "ChatLieu")
                        .WithMany("SanPhams")
                        .HasForeignKey("ChatLieuId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("WebTiemVangKimCuc.SER.Domain.Entities.DanhMuc.DmTrangSuc", "LoaiTrangSuc")
                        .WithMany("SanPhams")
                        .HasForeignKey("LoaiTrangSucId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("ChatLieu");

                    b.Navigation("LoaiTrangSuc");
                });

            modelBuilder.Entity("WebTiemVangKimCuc.SER.Domain.Entities.DanhMuc.DmChatLieu", b =>
                {
                    b.Navigation("SanPhams");
                });

            modelBuilder.Entity("WebTiemVangKimCuc.SER.Domain.Entities.DanhMuc.DmTrangSuc", b =>
                {
                    b.Navigation("SanPhams");
                });
#pragma warning restore 612, 618
        }
    }
}
