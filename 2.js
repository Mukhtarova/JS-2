var season = Number(prompt("Санды еңгізіңіз 1,2,3,4(1-қыс/2-көктем/3-жаз/4-күз)"));
if(0<season<=4)
{
    switch(season){
    case 1:
        alert("Қыс")
    break;
    case 2:
        alert("Көктем")
    break;
    case 3:
        alert("Жаз")
    break;
    case 4:
        alert("Күз")
    break;
    default:
        alert("Тек 1,2,3,4 сандарың еңгізіңіз")
        break;
}
} 