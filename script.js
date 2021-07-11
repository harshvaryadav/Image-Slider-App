function image_slider(i)
{
    var img=document.getElementById("image");
    var arr=["https://cdn.dribbble.com/users/3829954/screenshots/10946699/night-sky-with-moon-and-a-boy-with-boat.jpg","https://wallpaperaccess.com/full/2861722.jpg","https://www.wallpaperup.com/uploads/wallpapers/2017/03/03/1080072/20fb804abcad8a23cfc46d8a34ec4639-700.jpg","https://www.exploringourglobe.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTczMTMyODQ2Mzg5NTM1OTgw/v2osk-wns__abjjl4-unsplash.jpg"];
    img.src=arr[i-1];
    var ele=document.querySelectorAll("i");
    for(var j=1;j<5;j++)
    {
        ele[j-1].style.color="gray";
    }
    ele[i-1].style.color="black";
}