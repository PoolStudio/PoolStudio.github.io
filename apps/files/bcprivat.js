/* bcprivat.js */
var pBegDate = '2018-3-1'; var pid = new Array(); var pcode = new Array(); var pname = new Array(); var ppack = new Array(); var pprice = new Array(); var pcurrency = new Array();
 pid[0]=0; pcode[0]='bcprivat'; pname[0]='Хімія Barchemicals – приватні та громадські басейни'; ppack[0]='0'; pprice[0]=83; pcurrency[0]='title';
 pid[1]=1; pcode[1]='0'; pname[1]='СПЕЦІАЛЬНА'; ppack[1]='0'; pprice[1]=0; pcurrency[1]='head';
 pid[2]=2; pcode[2]='Код'; pname[2]='Найменування'; ppack[2]='Тара'; pprice[2]='Ціна'; pcurrency[2]='column';
 pid[3]=3; pcode[3]='PG-01'; pname[3]='Препарат для запуску басейну Ti-Plus'; ppack[3]='1л'; pprice[3]=50.65; pcurrency[3]='eur';
 pid[4]=4; pcode[4]='PG-11'; pname[4]='Активатор та стабілізатор хлору Activ R 2001 з новою формулою для ефективного захисту шкіри від хімії.'; ppack[4]='1кг'; pprice[4]=10.96; pcurrency[4]='eur';
 pid[5]=5; pcode[5]='PG-11.10'; pname[5]='0'; ppack[5]='10кг'; pprice[5]=89.59; pcurrency[5]='eur';
 pid[6]=6; pcode[6]='PG-12'; pname[6]='Анти-накип - рідкий противапняний засіб, запобігає утворенню вапняного нальоту.'; ppack[6]='1л'; pprice[6]=10.85; pcurrency[6]='eur';
 pid[7]=7; pcode[7]='PG-12.10'; pname[7]='0'; ppack[7]='10л'; pprice[7]=70.50; pcurrency[7]='eur';
 pid[8]=8; pcode[8]='PG-15'; pname[8]='Метал контроль RX - рідина для ефективного виведенна металів заліза та марганцю з води.'; ppack[8]='1л'; pprice[8]=11.96; pcurrency[8]='eur';
 pid[9]=9; pcode[9]='PG-15.10'; pname[9]='0'; ppack[9]='10л'; pprice[9]=81.64; pcurrency[9]='eur';
 pid[10]=10; pcode[10]='FIX1'; pname[10]='Fix a leak засіб від протікань басейнів та спа, 1л/25-83м3 (Канада)'; ppack[10]='1л '; pprice[10]=99.06; pcurrency[10]='eur';
 pid[11]=11; pcode[11]='FIX25'; pname[11]='0'; ppack[11]='0,25л'; pprice[11]=33.00; pcurrency[11]='eur';
 pid[12]=12; pcode[12]='GL'; pname[12]='Засіб від протікань в теплих підлогах і інших термальних системах Geo Loop (Канада)'; ppack[12]='0,25л'; pprice[12]=33.00; pcurrency[12]='eur';
 pid[13]=13; pcode[13]='PG-33'; pname[13]='Хлор-стоп, рідина. Особливий зменшувач рівня хлору.'; ppack[13]='1л'; pprice[13]=8.86; pcurrency[13]='eur';
 pid[14]=14; pcode[14]='PG-33.10'; pname[14]='0'; ppack[14]='10л'; pprice[14]=50.62; pcurrency[14]='eur';
 pid[15]=15; pcode[15]='0'; pname[15]='.'; ppack[15]='0'; pprice[15]=0; pcurrency[15]='header';
 pid[16]=16; pcode[16]='0'; pname[16]='ОЧИЩУВАЧІ'; ppack[16]='0'; pprice[16]=0; pcurrency[16]='head';
 pid[17]=17; pcode[17]='Код'; pname[17]='Найменування'; ppack[17]='Тара'; pprice[17]='Ціна'; pcurrency[17]='column';
 pid[18]=18; pcode[18]='PG-84'; pname[18]='Очищувач мінерального осаду - DR 84 Super. Найефективніша та найбільш концентрована комплексна формула на українському ринку. Швидко видаляє будь-який вапняний осад.'; ppack[18]='1л'; pprice[18]=7.05; pcurrency[18]='eur';
 pid[19]=19; pcode[19]='PG-84.10'; pname[19]='0'; ppack[19]='10л'; pprice[19]=58.84; pcurrency[19]='eur';
 pid[20]=20; pcode[20]='NETL'; pname[20]='Гель для очищення ватерлінії 2 в 1 (Франція, Toucan)'; ppack[20]='250мл '; pprice[20]=15.84; pcurrency[20]='eur';
 pid[21]=21; pcode[21]='0'; pname[21]='.'; ppack[21]='0'; pprice[21]=0; pcurrency[21]='header';
 pid[22]=22; pcode[22]='0'; pname[22]='КОРИГУВАННЯ рН'; ppack[22]='0'; pprice[22]=0; pcurrency[22]='head';
 pid[23]=23; pcode[23]='Код'; pname[23]='Найменування'; ppack[23]='Тара'; pprice[23]='Ціна'; pcurrency[23]='column';
 pid[24]=24; pcode[24]='PG-20.1.5'; pname[24]='рН мінус, гранули (концентрат) з буферним ефектом'; ppack[24]='1,5кг'; pprice[24]=5.92; pcurrency[24]='eur';
 pid[25]=25; pcode[25]='PG-20.5'; pname[25]='0'; ppack[25]='5кг'; pprice[25]=12.85; pcurrency[25]='eur';
 pid[26]=26; pcode[26]='PG-20.25'; pname[26]='0'; ppack[26]='25кг'; pprice[26]=53.01; pcurrency[26]='eur';
 pid[27]=27; pcode[27]='PG-21'; pname[27]='рН мінус - ефективний рідкий реагент для пониження рівня рН (Україна). '; ppack[27]='27кг'; pprice[27]=26.00; pcurrency[27]='eur';
 pid[28]=28; pcode[28]='PG-22'; pname[28]='рН мінус неорганічний з додаванням мінеральних солей Магнію і Калію для захисту шкіри відвідувачів. Призначення:Збалансована спеціальна формула окрім ефективного зниження рівня рН з буферним (стабілізуючим) ефектом, знижує наявність органічних забруднювачів, контролює бактеріальну флору для уникнення утворення біоплівок та вапняного осаду на фільтрувальному матеріалі. Сильний ефект буферизації значно знижує споживання продукту, у порівнянні з будь-яким іншим коректором рН.'; ppack[28]='10л'; pprice[28]=31.81; pcurrency[28]='eur';
 pid[29]=29; pcode[29]='PG-25'; pname[29]='рН плюс гранули з буферним ефектом'; ppack[29]='1кг'; pprice[29]=9.15; pcurrency[29]='eur';
 pid[30]=30; pcode[30]='PG-25.10'; pname[30]='0'; ppack[30]='10кг'; pprice[30]=53.54; pcurrency[30]='eur';
 pid[31]=31; pcode[31]='0'; pname[31]='.'; ppack[31]='0'; pprice[31]=0; pcurrency[31]='header';
 pid[32]=32; pcode[32]='0'; pname[32]='Хлор ШОК і ТРИВАЛИЙ без цианурової кислоти'; ppack[32]='0'; pprice[32]=0; pcurrency[32]='head';
 pid[33]=33; pcode[33]='Код'; pname[33]='Найменування'; ppack[33]='Тара'; pprice[33]='Ціна'; pcurrency[33]='column';
 pid[34]=34; pcode[34]='PG-30.1'; pname[34]='Шок-активний 70%, не стабілізований, гранули (професійна серія)'; ppack[34]='1кг'; pprice[34]=8.35; pcurrency[34]='eur';
 pid[35]=35; pcode[35]='PG-30.5'; pname[35]='0'; ppack[35]='5кг'; pprice[35]=36.22; pcurrency[35]='eur';
 pid[36]=36; pcode[36]='PG-30.25'; pname[36]='0'; ppack[36]='25кг'; pprice[36]=162.59; pcurrency[36]='eur';
 pid[37]=37; pcode[37]='PG-03'; pname[37]='Хлор тривалої дії в капсулах 300г (70%, не стабілізований)'; ppack[37]='4,2кг'; pprice[37]=54.54; pcurrency[37]='eur';
 pid[38]=38; pcode[38]='PG-31 '; pname[38]='Таблетки Quasar 10г не стабілізованого хлору (гіпохлорит кальцію 70%) для дозуючих систем DDS з поліпшеною формулою проти вапняного осаду.'; ppack[38]='25кг'; pprice[38]=204.52; pcurrency[38]='eur';
 pid[39]=39; pcode[39]='0'; pname[39]='.'; ppack[39]='0'; pprice[39]=0; pcurrency[39]='header';
 pid[40]=40; pcode[40]='0'; pname[40]='Хлор ШОК і ТРИВАЛИЙ СТАБІЛІЗОВАНИЙ (СА)'; ppack[40]='0'; pprice[40]=0; pcurrency[40]='head';
 pid[41]=41; pcode[41]='Код'; pname[41]='Найменування'; ppack[41]='Тара'; pprice[41]='Ціна'; pcurrency[41]='column';
 pid[42]=42; pcode[42]='PG-35.1'; pname[42]='Шок стабілізований 56%, табл. 20г Bluetab'; ppack[42]='1кг'; pprice[42]=11.30; pcurrency[42]='eur';
 pid[43]=43; pcode[43]='PG-35.5'; pname[43]='0'; ppack[43]='5кг'; pprice[43]=44.33; pcurrency[43]='eur';
 pid[44]=44; pcode[44]='PG-35.25'; pname[44]='0'; ppack[44]='25кг'; pprice[44]=209.00; pcurrency[44]='eur';
 pid[45]=45; pcode[45]='PG-36'; pname[45]='Шок стабілізований 56%, в гранулах'; ppack[45]='5кг'; pprice[45]=28.41; pcurrency[45]='eur';
 pid[46]=46; pcode[46]='PG-36.25'; pname[46]='0'; ppack[46]='25кг'; pprice[46]=132.53; pcurrency[46]='eur';
 pid[47]=47; pcode[47]='PG-41.1'; pname[47]='Стабілізований хлор тривалої дії 90%, табл. 200г'; ppack[47]='1кг'; pprice[47]=10.04; pcurrency[47]='eur';
 pid[48]=48; pcode[48]='PG-41.5'; pname[48]='0'; ppack[48]='5кг'; pprice[48]=41.46; pcurrency[48]='eur';
 pid[49]=49; pcode[49]='PG-41.25'; pname[49]='0'; ppack[49]='25кг'; pprice[49]=201.28; pcurrency[49]='eur';
 pid[50]=50; pcode[50]='PG-48.1'; pname[50]='Багатофункціональні  табл. 200г '; ppack[50]='1кг'; pprice[50]=11.15; pcurrency[50]='eur';
 pid[51]=51; pcode[51]='PG-48.5'; pname[51]='0'; ppack[51]='5кг'; pprice[51]=44.26; pcurrency[51]='eur';
 pid[52]=52; pcode[52]='0'; pname[52]='.'; ppack[52]='0'; pprice[52]=0; pcurrency[52]='header';
 pid[53]=53; pcode[53]='0'; pname[53]='РІДКИЙ ГІПОХЛОРИТ '; ppack[53]='0'; pprice[53]=0; pcurrency[53]='head';
 pid[54]=54; pcode[54]='Код'; pname[54]='Найменування'; ppack[54]='Тара'; pprice[54]='Ціна'; pcurrency[54]='column';
 pid[55]=55; pcode[55]='GXN-74'; pname[55]='Гіпохлорит натрію, рідкий (Україна)'; ppack[55]='25кг'; pprice[55]=29.99; pcurrency[55]='eur';
 pid[56]=56; pcode[56]='PG-74'; pname[56]='Гіпохлорит натрію, рідкий (Barchemicals, Італія), стабілізована формула 14-15%, термін служби 2 роки'; ppack[56]='25кг'; pprice[56]=34.99; pcurrency[56]='eur';
 pid[57]=57; pcode[57]='0'; pname[57]='.'; ppack[57]='0'; pprice[57]=0; pcurrency[57]='header';
 pid[58]=58; pcode[58]='0'; pname[58]='АЛЬГІЦИДИ'; ppack[58]='0'; pprice[58]=0; pcurrency[58]='head';
 pid[59]=59; pcode[59]='Код'; pname[59]='Найменування'; ppack[59]='Тара'; pprice[59]='Ціна'; pcurrency[59]='column';
 pid[60]=60; pcode[60]='PG-42.1'; pname[60]='Альгіцид C91 концентрований з бактерицидним ефектом. Не піниться. Нова формула забезпечує економію хлору.'; ppack[60]='1л'; pprice[60]=9.57; pcurrency[60]='eur';
 pid[61]=61; pcode[61]='PG-42.5'; pname[61]='0'; ppack[61]='5л'; pprice[61]=31.49; pcurrency[61]='eur';
 pid[62]=62; pcode[62]='PG-50'; pname[62]='BluDELUX. Дуже висока концентрація альгіциду забезпечує освітлення води, особливо в літніх басейнах. Засіб діє проти грибків, бактерій, багато видів водоростей в тому числі проти дуже стійких чорних водоростей.'; ppack[62]='1л'; pprice[62]=19.11; pcurrency[62]='eur';
 pid[63]=63; pcode[63]='PG-38'; pname[63]='Exposan RB1 – освітлюючий ефект широкого спектру дії для регулярної та шокової обробки води. Висока бактерицидна та альгіцидна дія. Концентрат.'; ppack[63]='10л'; pprice[63]=71.15; pcurrency[63]='eur';
 pid[64]=64; pcode[64]='PG-39'; pname[64]='Суміш з вираженою антибактеріальною та альгіцидною дією на основі полімерів і природних біополімерів. '; ppack[64]='10л'; pprice[64]=168.66; pcurrency[64]='eur';
 pid[65]=65; pcode[65]='PG-43'; pname[65]='Альгіцид. Не піниться. Ефективний в боротьбі з водоростями. Зручна упаковка для великих басейнів.'; ppack[65]='20л'; pprice[65]=50.71; pcurrency[65]='eur';
 pid[66]=66; pcode[66]='0'; pname[66]='.'; ppack[66]='0'; pprice[66]=0; pcurrency[66]='header';
 pid[67]=67; pcode[67]='0'; pname[67]='КОАГУЛЯНТИ'; ppack[67]='0'; pprice[67]=0; pcurrency[67]='head';
 pid[68]=68; pcode[68]='Код'; pname[68]='Найменування'; ppack[68]='Тара'; pprice[68]='Ціна'; pcurrency[68]='column';
 pid[69]=69; pcode[69]='PG-44'; pname[69]='Флокулянт blufloc в таблетках 200г, для піщаних фільтрів. Освітлює воду та видаляє побічні продукти знезараження.'; ppack[69]='800г'; pprice[69]=7.96; pcurrency[69]='eur';
 pid[70]=70; pcode[70]='PG-44.5'; pname[70]='0'; ppack[70]='5кг'; pprice[70]=44.70; pcurrency[70]='eur';
 pid[71]=71; pcode[71]='PG-45.1'; pname[71]='Флокулянт blufloc в картриджах (мішечках)'; ppack[71]='1кг'; pprice[71]=15.36; pcurrency[71]='eur';
 pid[72]=72; pcode[72]='PG-46.1'; pname[72]='Коагулянт активний - ефективний рідкий реагент. Освітлює воду та видаляє побічні продукти знезараження.'; ppack[72]='1л'; pprice[72]=5.74; pcurrency[72]='eur';
 pid[73]=73; pcode[73]='PG-46.5'; pname[73]='0'; ppack[73]='5л'; pprice[73]=18.09; pcurrency[73]='eur';
 pid[74]=74; pcode[74]='PG-46.10'; pname[74]='0'; ppack[74]='10л'; pprice[74]=25.19; pcurrency[74]='eur';
 pid[75]=75; pcode[75]='PG-47'; pname[75]='Коагулянт - рідкий. Освітлює воду та видаляє побічні продукти знезараження. Зручна упаковка.'; ppack[75]='20л'; pprice[75]=50.71; pcurrency[75]='eur';
 pid[76]=76; pcode[76]='0'; pname[76]='.'; ppack[76]='0'; pprice[76]=0; pcurrency[76]='header';
 pid[77]=77; pcode[77]='0'; pname[77]='ЗИМОВА'; ppack[77]='0'; pprice[77]=0; pcurrency[77]='head';
 pid[78]=78; pcode[78]='Код'; pname[78]='Найменування'; ppack[78]='Тара'; pprice[78]='Ціна'; pcurrency[78]='column';
 pid[79]=79; pcode[79]='PG-90'; pname[79]='Зимовий догляд Winter Combi R/L. Комбінований висококонцентрований засіб для попередження винекнення типових зимових проблем: вапняний наліт і ріст водоростей.'; ppack[79]='1л'; pprice[79]=12.58; pcurrency[79]='eur';
 pid[80]=80; pcode[80]='PG-90.10'; pname[80]='0'; ppack[80]='10л'; pprice[80]=112.44; pcurrency[80]='eur';
 pid[81]=81; pcode[81]='0'; pname[81]='.'; ppack[81]='0'; pprice[81]=0; pcurrency[81]='header';
 pid[82]=82; pcode[82]='0'; pname[82]='Barchemicals має сертифікати ISO 9001:2008 (№4247), ISO 14001:2004 (№6388).'; ppack[82]='0'; pprice[82]=0; pcurrency[82]='header';
