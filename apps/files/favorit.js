/* favorit.js */
var pBegDate = '2018-3-1'; var pid = new Array(); var pcode = new Array(); var pname = new Array(); var pprice = new Array(); var pcurrency = new Array();
 pid[0]=0; pcode[0]='favorit'; pname[0]='Композитные чаши бассейнов Фаворит'; pprice[0]=111; pcurrency[0]='title';
 pid[1]=1; pcode[1]='0'; pname[1]='Cерія "Стандарт" (10 років гарантії)'; pprice[1]=0; pcurrency[1]='head';
 pid[2]=2; pcode[2]='Назва басейну'; pname[2]='Розмір чаші басейну, м'; pprice[2]='Ціна'; pcurrency[2]='column';
 pid[3]=3; pcode[3]='Монако 13'; pname[3]='13,0 x 3,7 x 1,25 - 1,9'; pprice[3]=9850.00; pcurrency[3]='eur';
 pid[4]=4; pcode[4]='Монако 10'; pname[4]='10,0 x 3,6 x 1,25 - 1,9'; pprice[4]=7400.00; pcurrency[4]='eur';
 pid[5]=5; pcode[5]='Оскар 10'; pname[5]='10,2 x 3,6 x 1,55'; pprice[5]=6700.00; pcurrency[5]='eur';
 pid[6]=6; pcode[6]='Атлантида 10'; pname[6]='10,3 х 2,9 х 1,5'; pprice[6]=6450.00; pcurrency[6]='eur';
 pid[7]=7; pcode[7]='Аквапарк'; pname[7]='Перелівний комплект Олімпік + Ромашка'; pprice[7]=6400.00; pcurrency[7]='eur';
 pid[8]=8; pcode[8]='Гідропарк'; pname[8]='Перелівний комплект Амазонка + Ромашка'; pprice[8]=4600.00; pcurrency[8]='eur';
 pid[9]=9; pcode[9]='Версаль'; pname[9]='8,0 x 3,8 x 1,7'; pprice[9]=5950.00; pcurrency[9]='eur';
 pid[10]=10; pcode[10]='Корсіка'; pname[10]='8,4 x 3,8 x 1,6'; pprice[10]=5800.00; pcurrency[10]='eur';
 pid[11]=11; pcode[11]='Олімпік'; pname[11]='8,4 x 3,6 x 1,55'; pprice[11]=5300.00; pcurrency[11]='eur';
 pid[12]=12; pcode[12]='Оскар 8'; pname[12]='8,2 x 3,6 x 1,55'; pprice[12]=5600.00; pcurrency[12]='eur';
 pid[13]=13; pcode[13]='Атлантида 8'; pname[13]='8,3 x 2,9 x 1,5 '; pprice[13]=4830.00; pcurrency[13]='eur';
 pid[14]=14; pcode[14]='Женева'; pname[14]='7,8 x 3,4 x 1,6'; pprice[14]=5300.00; pcurrency[14]='eur';
 pid[15]=15; pcode[15]='Парус'; pname[15]='7,6 x 3,5 x 1,5'; pprice[15]=4750.00; pcurrency[15]='eur';
 pid[16]=16; pcode[16]='Оскар 7'; pname[16]='7,2 x 3,6 x 1,55'; pprice[16]=4950.00; pcurrency[16]='eur';
 pid[17]=17; pcode[17]='Корвет'; pname[17]='7,1 x 3,3 x 1,5'; pprice[17]=4650.00; pcurrency[17]='eur';
 pid[18]=18; pcode[18]='Мустанг'; pname[18]='6,5 x 3,8 x 1,6 '; pprice[18]=4350.00; pcurrency[18]='eur';
 pid[19]=19; pcode[19]='Атлантік'; pname[19]='6,5 x 3,5 x 1,5 '; pprice[19]=4300.00; pcurrency[19]='eur';
 pid[20]=20; pcode[20]='Оскар 6'; pname[20]='6,2 x 3,6 x 1,55'; pprice[20]=4250.00; pcurrency[20]='eur';
 pid[21]=21; pcode[21]='Амазонка'; pname[21]='6,2 x 3,3 x 1,5 '; pprice[21]=3550.00; pcurrency[21]='eur';
 pid[22]=22; pcode[22]='Гольф'; pname[22]='5,65 x 2,8 x 1,5 '; pprice[22]=3500.00; pcurrency[22]='eur';
 pid[23]=23; pcode[23]='Атлантида 6'; pname[23]='5,85 x 2,9 x 1,5 '; pprice[23]=3450.00; pcurrency[23]='eur';
 pid[24]=24; pcode[24]='Оскар 5'; pname[24]='5,2 x 3,6 x 1,55'; pprice[24]=3400.00; pcurrency[24]='eur';
 pid[25]=25; pcode[25]='Фенікс'; pname[25]='5,2 x 3,2 x 1,6 '; pprice[25]=3350.00; pcurrency[25]='eur';
 pid[26]=26; pcode[26]='Лотос 1  Чаша переливна'; pname[26]='3,0 х 2,45 х 1,5'; pprice[26]=1800.00; pcurrency[26]='eur';
 pid[27]=27; pcode[27]='Лотос 2  Чаша  під скімер'; pname[27]='2,85 х 2,25 х 1,5'; pprice[27]=1450.00; pcurrency[27]='eur';
 pid[28]=28; pcode[28]='Глорія 1 Купіль переливна'; pname[28]='Ø 2,5 х 1,5'; pprice[28]=1350.00; pcurrency[28]='eur';
 pid[29]=29; pcode[29]='Глорія 2 Купіль під скімер'; pname[29]='Ø 2,2 х 1,5'; pprice[29]=1100.00; pcurrency[29]='eur';
 pid[30]=30; pcode[30]='Фонт'; pname[30]='Ø 1,8 х 1,5'; pprice[30]=950.00; pcurrency[30]='eur';
 pid[31]=31; pcode[31]='Каліпсо 1 Спа-басейн переливний'; pname[31]='Ø 3,2 х 0,83'; pprice[31]=1600.00; pcurrency[31]='eur';
 pid[32]=32; pcode[32]='Каліпсо 2 Спа-басейн під скімер'; pname[32]='Ø 2,65 х 0,8'; pprice[32]=1250.00; pcurrency[32]='eur';
 pid[33]=33; pcode[33]='Міраж 1  Спа-басейн переливний'; pname[33]='Ø 2,5 х 0,83'; pprice[33]=1100.00; pcurrency[33]='eur';
 pid[34]=34; pcode[34]='Міраж 2 Спа-басейн під скімер'; pname[34]='Ø 2,1 х 0,83'; pprice[34]=900.00; pcurrency[34]='eur';
 pid[35]=35; pcode[35]='Ромашка  Спа-басейн'; pname[35]='Ø 2,5 х 1,1'; pprice[35]=1050.00; pcurrency[35]='eur';
 pid[36]=36; pcode[36]='Балі Спа-басейн'; pname[36]='Ø 3,0 х 2,5 х 0,75'; pprice[36]=1000.00; pcurrency[36]='eur';
 pid[37]=37; pcode[37]='0'; pname[37]='.'; pprice[37]=0; pcurrency[37]='header';
 pid[38]=38; pcode[38]='0'; pname[38]='Cерія "Преміум" (25 років гарантії + колір  3D-Ultra)'; pprice[38]=0; pcurrency[38]='head';
 pid[39]=39; pcode[39]='Назва басейну'; pname[39]='Розмір чаші басейну, м'; pprice[39]='Ціна'; pcurrency[39]='column';
 pid[40]=40; pcode[40]='Монако 13'; pname[40]='13,0 x 3,7 x 1,25 - 1,9'; pprice[40]=19800.00; pcurrency[40]='eur';
 pid[41]=41; pcode[41]='Монако 10'; pname[41]='10,0 x 3,6 x 1,25 - 1,9'; pprice[41]=16950.00; pcurrency[41]='eur';
 pid[42]=42; pcode[42]='Оскар 10'; pname[42]='10,2 x 3,6 x 1,55'; pprice[42]=15400.00; pcurrency[42]='eur';
 pid[43]=43; pcode[43]='Атлантида 10'; pname[43]='10,3 х 2,9 х 1,5'; pprice[43]=14300.00; pcurrency[43]='eur';
 pid[44]=44; pcode[44]='Аквапарк'; pname[44]='Перелівний комплект Олімпік + Ромашка'; pprice[44]=15000.00; pcurrency[44]='eur';
 pid[45]=45; pcode[45]='Гідропарк'; pname[45]='Перелівний комплект Амазонка + Ромашка'; pprice[45]=11100.00; pcurrency[45]='eur';
 pid[46]=46; pcode[46]='Версаль'; pname[46]='8,0 x 3,8 x 1,7'; pprice[46]=13750.00; pcurrency[46]='eur';
 pid[47]=47; pcode[47]='Корсіка'; pname[47]='8,4 x 3,8 x 1,6'; pprice[47]=13500.00; pcurrency[47]='eur';
 pid[48]=48; pcode[48]='Олімпік'; pname[48]='8,4 x 3,6 x 1,55'; pprice[48]=12700.00; pcurrency[48]='eur';
 pid[49]=49; pcode[49]='Оскар 8'; pname[49]='8,2 x 3,6 x 1,55'; pprice[49]=12900.00; pcurrency[49]='eur';
 pid[50]=50; pcode[50]='Атлантида 8'; pname[50]='8,3 x 2,9 x 1,5 '; pprice[50]=11450.00; pcurrency[50]='eur';
 pid[51]=51; pcode[51]='Женева'; pname[51]='7,8 x 3,4 x 1,6'; pprice[51]=12200.00; pcurrency[51]='eur';
 pid[52]=52; pcode[52]='Парус'; pname[52]='7,6 x 3,5 x 1,5'; pprice[52]=11500.00; pcurrency[52]='eur';
 pid[53]=53; pcode[53]='Оскар 7'; pname[53]='7,2 x 3,6 x 1,55'; pprice[53]=11800.00; pcurrency[53]='eur';
 pid[54]=54; pcode[54]='Корвет'; pname[54]='7,1 x 3,3 x 1,5'; pprice[54]=11350.00; pcurrency[54]='eur';
 pid[55]=55; pcode[55]='Мустанг'; pname[55]='6,5 x 3,8 x 1,6 '; pprice[55]=10800.00; pcurrency[55]='eur';
 pid[56]=56; pcode[56]='Атлантік'; pname[56]='6,5 x 3,5 x 1,5 '; pprice[56]=10350.00; pcurrency[56]='eur';
 pid[57]=57; pcode[57]='Оскар 6'; pname[57]='6,2 x 3,6 x 1,55'; pprice[57]=9950.00; pcurrency[57]='eur';
 pid[58]=58; pcode[58]='Амазонка'; pname[58]='6,2 x 3,3 x 1,5 '; pprice[58]=8800.00; pcurrency[58]='eur';
 pid[59]=59; pcode[59]='Гольф'; pname[59]='5,65 x 2,8 x 1,5 '; pprice[59]=8600.00; pcurrency[59]='eur';
 pid[60]=60; pcode[60]='Атлантида 6'; pname[60]='5,85 x 2,9 x 1,5 '; pprice[60]=8400.00; pcurrency[60]='eur';
 pid[61]=61; pcode[61]='Оскар 5'; pname[61]='5,2 x 3,6 x 1,55'; pprice[61]=8300.00; pcurrency[61]='eur';
 pid[62]=62; pcode[62]='Фенікс'; pname[62]='5,2 x 3,2 x 1,6 '; pprice[62]=8050.00; pcurrency[62]='eur';
 pid[63]=63; pcode[63]='Лотос 1  Чаша переливна'; pname[63]='3,0 х 2,45 х 1,5'; pprice[63]=3900.00; pcurrency[63]='eur';
 pid[64]=64; pcode[64]='Лотос 2  Чаша  під скімер'; pname[64]='2,85 х 2,25 х 1,5'; pprice[64]=2900.00; pcurrency[64]='eur';
 pid[65]=65; pcode[65]='Глорія 1 Купіль переливна'; pname[65]='Ø 2,5 х 1,5'; pprice[65]=3000.00; pcurrency[65]='eur';
 pid[66]=66; pcode[66]='Глорія 2 Купіль під скімер'; pname[66]='Ø 2,2 х 1,5'; pprice[66]=2400.00; pcurrency[66]='eur';
 pid[67]=67; pcode[67]='Фонт'; pname[67]='Ø 1,8 х 1,5'; pprice[67]=2100.00; pcurrency[67]='eur';
 pid[68]=68; pcode[68]='Каліпсо 1 Спа-басейн переливний'; pname[68]='Ø 3,2 х 0,83'; pprice[68]=3400.00; pcurrency[68]='eur';
 pid[69]=69; pcode[69]='Каліпсо 2 Спа-басейн під скімер'; pname[69]='Ø 2,65 х 0,8'; pprice[69]=2500.00; pcurrency[69]='eur';
 pid[70]=70; pcode[70]='Міраж 1  Спа-басейн переливний'; pname[70]='Ø 2,5 х 0,83'; pprice[70]=2900.00; pcurrency[70]='eur';
 pid[71]=71; pcode[71]='Міраж 2 Спа-басейн під скімер'; pname[71]='Ø 2,1 х 0,83'; pprice[71]=2200.00; pcurrency[71]='eur';
 pid[72]=72; pcode[72]='Ромашка  Спа-басейн'; pname[72]='Ø 2,5 х 1,1'; pprice[72]=2300.00; pcurrency[72]='eur';
 pid[73]=73; pcode[73]='Балі Спа-басейн'; pname[73]='Ø 3,0 х 2,5 х 0,75'; pprice[73]=2250.00; pcurrency[73]='eur';
 pid[74]=74; pcode[74]='0'; pname[74]='.'; pprice[74]=0; pcurrency[74]='header';
 pid[75]=75; pcode[75]='0'; pname[75]='Утеплення стінок "THERMOS"'; pprice[75]=0; pcurrency[75]='head';
 pid[76]=76; pcode[76]='Назва басейну'; pname[76]='Розмір чаші басейну, м'; pprice[76]='Ціна'; pcurrency[76]='column';
 pid[77]=77; pcode[77]='Монако 13'; pname[77]='13,0 x 3,7 x 1,25 - 1,9'; pprice[77]=1280.00; pcurrency[77]='eur';
 pid[78]=78; pcode[78]='Монако 10'; pname[78]='10,0 x 3,6 x 1,25 - 1,9'; pprice[78]=980.00; pcurrency[78]='eur';
 pid[79]=79; pcode[79]='Оскар 10'; pname[79]='10,2 x 3,6 x 1,55'; pprice[79]=850.00; pcurrency[79]='eur';
 pid[80]=80; pcode[80]='Атлантида 10'; pname[80]='10,3 х 2,9 х 1,5'; pprice[80]=840.00; pcurrency[80]='eur';
 pid[81]=81; pcode[81]='Аквапарк'; pname[81]='Перелівний комплект Олімпік + Ромашка'; pprice[81]=940.00; pcurrency[81]='eur';
 pid[82]=82; pcode[82]='Гідропарк'; pname[82]='Перелівний комплект Амазонка + Ромашка'; pprice[82]=770.00; pcurrency[82]='eur';
 pid[83]=83; pcode[83]='Версаль'; pname[83]='8,0 x 3,8 x 1,7'; pprice[83]=820.00; pcurrency[83]='eur';
 pid[84]=84; pcode[84]='Корсіка'; pname[84]='8,4 x 3,8 x 1,6'; pprice[84]=770.00; pcurrency[84]='eur';
 pid[85]=85; pcode[85]='Олімпік'; pname[85]='8,4 x 3,6 x 1,55'; pprice[85]=740.00; pcurrency[85]='eur';
 pid[86]=86; pcode[86]='Оскар 8'; pname[86]='8,2 x 3,6 x 1,55'; pprice[86]=750.00; pcurrency[86]='eur';
 pid[87]=87; pcode[87]='Атлантида 8'; pname[87]='8,3 x 2,9 x 1,5 '; pprice[87]=700.00; pcurrency[87]='eur';
 pid[88]=88; pcode[88]='Женева'; pname[88]='7,8 x 3,4 x 1,6'; pprice[88]=720.00; pcurrency[88]='eur';
 pid[89]=89; pcode[89]='Парус'; pname[89]='7,6 x 3,5 x 1,5'; pprice[89]=680.00; pcurrency[89]='eur';
 pid[90]=90; pcode[90]='Оскар 7'; pname[90]='7,2 x 3,6 x 1,55'; pprice[90]=700.00; pcurrency[90]='eur';
 pid[91]=91; pcode[91]='Корвет'; pname[91]='7,1 x 3,3 x 1,5'; pprice[91]=680.00; pcurrency[91]='eur';
 pid[92]=92; pcode[92]='Мустанг'; pname[92]='6,5 x 3,8 x 1,6 '; pprice[92]=660.00; pcurrency[92]='eur';
 pid[93]=93; pcode[93]='Атлантік'; pname[93]='6,5 x 3,5 x 1,5 '; pprice[93]=600.00; pcurrency[93]='eur';
 pid[94]=94; pcode[94]='Оскар 6'; pname[94]='6,2 x 3,6 x 1,55'; pprice[94]=600.00; pcurrency[94]='eur';
 pid[95]=95; pcode[95]='Амазонка'; pname[95]='6,2 x 3,3 x 1,5 '; pprice[95]=570.00; pcurrency[95]='eur';
 pid[96]=96; pcode[96]='Гольф'; pname[96]='5,65 x 2,8 x 1,5 '; pprice[96]=550.00; pcurrency[96]='eur';
 pid[97]=97; pcode[97]='Атлантида 6'; pname[97]='5,85 x 2,9 x 1,5 '; pprice[97]=550.00; pcurrency[97]='eur';
 pid[98]=98; pcode[98]='Оскар 5'; pname[98]='5,2 x 3,6 x 1,55'; pprice[98]=540.00; pcurrency[98]='eur';
 pid[99]=99; pcode[99]='Фенікс'; pname[99]='5,2 x 3,2 x 1,6 '; pprice[99]=540.00; pcurrency[99]='eur';
 pid[100]=100; pcode[100]='Лотос 1  Чаша переливна'; pname[100]='3,0 х 2,45 х 1,5'; pprice[100]=300.00; pcurrency[100]='eur';
 pid[101]=101; pcode[101]='Лотос 2  Чаша  під скімер'; pname[101]='2,85 х 2,25 х 1,5'; pprice[101]=300.00; pcurrency[101]='eur';
 pid[102]=102; pcode[102]='Глорія 1 Купіль переливна'; pname[102]='Ø 2,5 х 1,5'; pprice[102]=220.00; pcurrency[102]='eur';
 pid[103]=103; pcode[103]='Глорія 2 Купіль під скімер'; pname[103]='Ø 2,2 х 1,5'; pprice[103]=220.00; pcurrency[103]='eur';
 pid[104]=104; pcode[104]='Фонт'; pname[104]='Ø 1,8 х 1,5'; pprice[104]=200.00; pcurrency[104]='eur';
 pid[105]=105; pcode[105]='Каліпсо 1 Спа-басейн переливний'; pname[105]='Ø 3,2 х 0,83'; pprice[105]=280.00; pcurrency[105]='eur';
 pid[106]=106; pcode[106]='Каліпсо 2 Спа-басейн під скімер'; pname[106]='Ø 2,65 х 0,8'; pprice[106]=280.00; pcurrency[106]='eur';
 pid[107]=107; pcode[107]='Міраж 1  Спа-басейн переливний'; pname[107]='Ø 2,5 х 0,83'; pprice[107]=200.00; pcurrency[107]='eur';
 pid[108]=108; pcode[108]='Міраж 2 Спа-басейн під скімер'; pname[108]='Ø 2,1 х 0,83'; pprice[108]=200.00; pcurrency[108]='eur';
 pid[109]=109; pcode[109]='Ромашка  Спа-басейн'; pname[109]='Ø 2,5 х 1,1'; pprice[109]=200.00; pcurrency[109]='eur';
 pid[110]=110; pcode[110]='Балі Спа-басейн'; pname[110]='Ø 3,0 х 2,5 х 0,75'; pprice[110]=220.00; pcurrency[110]='eur';
