/* bcequip.js */
var pBegDate = '2018-3-1'; var pid = new Array(); var pcode = new Array(); var pname = new Array(); var ppack = new Array(); var pprice = new Array(); var pcurrency = new Array();
 pid[0]=0; pcode[0]='bcequip'; pname[0]='Тестеры дозаторы и измерительные станции'; ppack[0]='0'; pprice[0]=43; pcurrency[0]='title';
 pid[1]=1; pcode[1]='0'; pname[1]='Діагностика AquaChek'; ppack[1]='0'; pprice[1]=0; pcurrency[1]='head';
 pid[2]=2; pcode[2]='Код'; pname[2]='Найменування'; ppack[2]='Тести'; pprice[2]='Ціна'; pcurrency[2]='column';
 pid[3]=3; pcode[3]='PG-Y'; pname[3]='Тестер PG-Yellow 4 в 1, визначає:     вільний хлор, рН, загальну лужність, цианурову кислоту'; ppack[3]='50 вимірів'; pprice[3]=12.50; pcurrency[3]='eur';
 pid[4]=4; pcode[4]='PG-salt'; pname[4]='Тестер PG Salt, 10 смужок визначає: сіль 0,4-7г/л'; ppack[4]='10 вимірів'; pprice[4]=15.38; pcurrency[4]='eur';
 pid[5]=5; pcode[5]='PG-Pro'; pname[5]='Тестер PG Pro 5 в 1, визначає: Загальний хлор, загальний бром, вільний хлор, рН, загальна лужність'; ppack[5]='100 вимірів'; pprice[5]=17.75; pcurrency[5]='eur';
 pid[6]=6; pcode[6]='PG-ProII'; pname[6]='Тестер PG Pro II 4 в 1, визначає: цианурову кислоту, TDS, низьку та високу жорсткість'; ppack[6]='25 вимірів'; pprice[6]=14.98; pcurrency[6]='eur';
 pid[7]=7; pcode[7]='PG-Cu'; pname[7]='Тестер PG Cu, 25 смужок визначає: мідь'; ppack[7]='25 вимірів'; pprice[7]=14.98; pcurrency[7]='eur';
 pid[8]=8; pcode[8]='PG-Am'; pname[8]='Тестер PG Ammonia, визначає: аміак'; ppack[8]='25 вимірів'; pprice[8]=59.38; pcurrency[8]='eur';
 pid[9]=9; pcode[9]='PG-Cd'; pname[9]='Тестер PG Chloride, визначає: хлориди'; ppack[9]='40 вимірів'; pprice[9]=59.98; pcurrency[9]='eur';
 pid[10]=10; pcode[10]='PG-TR'; pname[10]='Цифровий тестер TruTest 3 в 1, V2.2:                       Вільний хлор, рН, лужність'; ppack[10]='25 вимірів'; pprice[10]=107.08; pcurrency[10]='eur';
 pid[11]=11; pcode[11]='PG-TR-P'; pname[11]='Перезаправка до цифрового тестеру TruTest'; ppack[11]='50 вимірів'; pprice[11]=14.77; pcurrency[11]='eur';
 pid[12]=12; pcode[12]='0'; pname[12]='.'; ppack[12]='0'; pprice[12]=0; pcurrency[12]='header';
 pid[13]=13; pcode[13]='0'; pname[13]='Дозатори і вимірювальні станції Engineering '; ppack[13]='0'; pprice[13]=0; pcurrency[13]='head';
 pid[14]=14; pcode[14]='0'; pname[14]='.'; ppack[14]='0'; pprice[14]=0; pcurrency[14]='header';
 pid[15]=15; pcode[15]='0'; pname[15]='Вимірювальні станції'; ppack[15]='0'; pprice[15]=0; pcurrency[15]='head';
 pid[16]=16; pcode[16]='Код'; pname[16]='Найменування'; ppack[16]='Од.вим.'; pprice[16]='Ціна'; pcurrency[16]='column';
 pid[17]=17; pcode[17]='Telepool Smart'; pname[17]='Фотометрична контрольно-вимірювальна станція Telepool Smart Save Energy (вільний і комбінований хлор) +/- 0.01мг\л, рН± 0.01, Redox ± 1 mV, TDS 1 μS, температура ± 0.1 °C'; ppack[17]='к-т'; pprice[17]=5744.48; pcurrency[17]='eur';
 pid[18]=18; pcode[18]='Telepool LC'; pname[18]='Фотометрична контрольно-вимірювальна станція Telepool LC (вільний хлор) +/- 0.01мг/л, рН± 0.01'; ppack[18]='к-т'; pprice[18]=3118.64; pcurrency[18]='eur';
 pid[19]=19; pcode[19]='0'; pname[19]='.'; ppack[19]='0'; pprice[19]=0; pcurrency[19]='header';
 pid[20]=20; pcode[20]='0'; pname[20]='Дозатори'; ppack[20]='0'; pprice[20]=0; pcurrency[20]='head';
 pid[21]=21; pcode[21]='Код'; pname[21]='Найменування'; ppack[21]='Од.вим.'; pprice[21]='Ціна'; pcurrency[21]='column';
 pid[22]=22; pcode[22]='DDS'; pname[22]='DDS Evolution – дозатор таблеток Quasar для басейнів 50-400м3, завантаження 25кг'; ppack[22]='к-т'; pprice[22]=1442.05; pcurrency[22]='eur';
 pid[23]=23; pcode[23]='DDSplus'; pname[23]='DDS Evolution Plus – дозатор таблеток Quasar для басейнів 400-1000м3, завантаження 40кг'; ppack[23]='к-т'; pprice[23]=1816.83; pcurrency[23]='eur';
 pid[24]=24; pcode[24]='0'; pname[24]='.'; ppack[24]='0'; pprice[24]=0; pcurrency[24]='header';
 pid[25]=25; pcode[25]='0'; pname[25]='Запчастини та витратні матеріали'; ppack[25]='0'; pprice[25]=0; pcurrency[25]='head';
 pid[26]=26; pcode[26]='Код'; pname[26]='Найменування'; ppack[26]='Од.вим.'; pprice[26]='Ціна'; pcurrency[26]='column';
 pid[27]=27; pcode[27]='120299108'; pname[27]='Поплавок для DDS GL1'; ppack[27]='шт'; pprice[27]=100.00; pcurrency[27]='eur';
 pid[28]=28; pcode[28]='120299110'; pname[28]='Поплавок для DDS GL2'; ppack[28]='шт'; pprice[28]=88.75; pcurrency[28]='eur';
 pid[29]=29; pcode[29]='166402002'; pname[29]='Електро-магнітний клапан 24В для DDS'; ppack[29]='шт'; pprice[29]=166.25; pcurrency[29]='eur';
 pid[30]=30; pcode[30]='050502012'; pname[30]='Перезаправка контролера START'; ppack[30]='шт'; pprice[30]=42.50; pcurrency[30]='eur';
 pid[31]=31; pcode[31]='050502010'; pname[31]='Перезаправка контролера DPD1A+DPD1B'; ppack[31]='шт'; pprice[31]=42.50; pcurrency[31]='eur';
 pid[32]=32; pcode[32]='050502014'; pname[32]='Перезаправка контролера DPD3'; ppack[32]='шт'; pprice[32]=76.25; pcurrency[32]='eur';
 pid[33]=33; pcode[33]='0'; pname[33]='.'; ppack[33]='0'; pprice[33]=0; pcurrency[33]='header';
 pid[34]=34; pcode[34]='0'; pname[34]='Допобладнання: автодолив, автодозатор, електроліз'; ppack[34]='0'; pprice[34]=0; pcurrency[34]='head';
 pid[35]=35; pcode[35]='Код'; pname[35]='Найменування'; ppack[35]='Од.вим.'; pprice[35]='Ціна'; pcurrency[35]='column';
 pid[36]=36; pcode[36]='3150'; pname[36]='Автодолив, FR'; ppack[36]='к-т'; pprice[36]=57.39; pcurrency[36]='eur';
 pid[37]=37; pcode[37]='CL220EURO'; pname[37]='Напівавтоматич. дозатор таблеток, 4кг, 3/4", US'; ppack[37]='к-т'; pprice[37]=153.00; pcurrency[37]='eur';
 pid[38]=38; pcode[38]='C0250EXPE'; pname[38]='Напівавтоматич. дозатор таблеток, 7кг, 3/4", US'; ppack[38]='к-т'; pprice[38]=321.51; pcurrency[38]='eur';
 pid[39]=39; pcode[39]='DIY-CHEM'; pname[39]='Автоматичний регулятор рівня рН з насосом, IT'; ppack[39]='к-т'; pprice[39]=561.91; pcurrency[39]='eur';
 pid[40]=40; pcode[40]='DIY-ORP'; pname[40]='Автоматичний регулятор Redox з насосом (для дозаторів чи електролізних), IT. Опція для DIY-CHEM'; ppack[40]='к-т'; pprice[40]=226.50; pcurrency[40]='eur';
 pid[41]=41; pcode[41]='SAS15CEU'; pname[41]='Електролізна установка Salt and Swim™ 3С (нова) 15г/год до 75м3'; ppack[41]='к-т'; pprice[41]=701.68; pcurrency[41]='eur';
 pid[42]=42; pcode[42]='SAS22CEU'; pname[42]='Електролізна установка Salt and Swim™ 3С (нова) 22г/год до 110м3'; ppack[42]='к-т'; pprice[42]=754.71; pcurrency[42]='eur';
