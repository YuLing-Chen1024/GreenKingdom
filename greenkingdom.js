$(document).ready(function () {

        const plants = [
            {
                img: '1_1.png',
                img2: '1_2.png',
                name: '熊童子',
                price: 50,
                desc1: '熊童子，又稱熊掌，原產於非洲，有大量笨重的卵形模糊綠葉與著名的「牙齒」所以有了熊掌的名稱。',
                desc2: null,
                notice: null
            },
            {
                img: '2_1.png',
                img2: '2_2.png',
                name: '雀扇',
                price: 80,
                desc1: '雀扇，景天科伽藍菜屬，學名：Kalanchoe rhombopilosa，英文名：Pies from Heaven，馬達加斯加原生種。',
                desc2: '雀扇的外型相當好認，灰白的葉色，像扇子般片狀的形狀，頂端像是彩繪了一點一點的咖啡色斑點，太陽曬得越多，斑點越明顯。單片葉子大小約3公分，成株約30公分高，在台灣，我們因為他的外型而幫他取了很適合的綽號「巧克力脆片」。',
                notice: null
            },
            {
                img: '3_1.png',
                img2: '3_2.png',
                name: '秋麗',
                price: 80,
                desc1: '秋麗，景天科多肉植物，為朧月與乙女心的交種，群生，葉長厚實，葉有幾何稜角及白粉，背面較圓潤，每朵最大不超成人手掌，種植超過兩年容易木質化。',
                desc2: null,
                notice: null
            },
            {
                img: '4_1.png',
                img2: '4_2.png',
                name: '白牡丹',
                price: 30,
                desc1: '白牡丹（Graptoveria cv. Titubans）是朧月與靜夜交配而成，葉片厚實像白玫瑰，好照顧好生長。',
                desc2: null,
                notice: null
            },
            {
                img: '5_1.png',
                img2: '5_2.png',
                name: '白姬之舞',
                price: 40,
                desc1: '白姬之舞，景天科伽藍菜屬，學名：Kalanchoe Marnieriana。白姬之舞原產於南非，外型根莖直立、葉對生（左右各長一片）、葉形平展且成圓弧球拍形狀，光滑無毛有白粉、葉片邊緣有些微不規則的鋸齒，每片葉子約1.5-2公分大小，直立型生長。',
                desc2: null,
                notice: '伽藍菜屬的多肉，因為這屬的多肉在台灣一年四季都可以長得很不錯，非常推薦養多肉的新手。'
            },
            {
                img: '6_1.png',
                img2: '6_2.png',
                name: '蕾絲姑娘',
                price: 30,
                desc1: '蕾絲姑娘，景天科落地生根屬，原產於馬達加斯加，學名：Bryo phyllum laetivirens。也有人稱蕾絲公主、森之蝶舞。',
                desc2: null,
                notice: null
            },
            {
                img: '7_1.png',
                img2: '7_2.png',
                name: '聖誕東雲',
                price: 40,
                desc1: '聖誕東雲，景天科擬石蓮屬東雲系（厚葉蓮座草）的多肉植物，學名為：Echeveria Agavoides cv. Christmas eve。聖誕東雲單頭植株可達15公分，葉片梭形暗綠色，中端較為寬厚，前段斜尖艷紅色，葉片排列緊密呈蓮花狀環形分佈。聖誕東雲株型狀態受季節較大影響，秋冬季，葉色較為黃綠，葉緣葉背泛紅，夏季葉片則顯得較綠且鬆散細長。',
                desc2: null,
                notice: null
            },
            {
                img: '8_1.png',
                img2: '8_2.png',
                name: '立方霜',
                price: 50,
                desc1: '立方霜，景天科擬石蓮屬的多肉植物，英文叫Cubic Frost。植株最大可達30公分寬，25公分高。主要的特色是緊實的粉紫色厚葉，但要天氣夠冷、溫差大的情況下比較顯色。葉子層層堆疊的模樣像個立方柱。立方霜開的花是橙紅色的小花，喜歡在涼爽乾燥且陽光充足的環境下長大（最低適溫為6度C），這溫度在台灣不常見，所以不用擔心立方霜會凍傷，只需在天冷那一週不澆水，待暖和些再給水喔！',
                desc2: null,
                notice: null
            },
            {
                img: '9_1.png',
                img2: '9_2.png',
                name: '龍骨',
                price: 50,
                desc1: '龍骨，大戟科，大戟屬，又稱三角霸王鞭、三角大戟、量天尺。因堅硬直立且帶刺的外型得其名。植株常綠呈三棱形狀，多分枝，成株最高可達4-5公尺，棱邊有小刺，極短。在戶外種植的龍骨頂端易生扁葉，而室內種植因為難以正常行光合作用，葉子容易掉光。',
                desc2: null,
                notice: null
            },
            {
                img: '10_1.png',
                img2: '10_2.png',
                name: '姬朧月',
                price: 50,
                desc1: '姬朧月喜歡陽光充足的環境，耐乾旱，葉面顏色越曬越紅，在台灣春秋兩季生長快速。若是在室內種植，葉面顏色偏霧綠色、也比較沒有光澤感，所以建議要在室外種植會更漂亮喔！每一次的澆水方式都要等土乾再全部澆透。若是在比較不通風的環境下，盡量不要澆到葉心，長期積水容易爛心。',
                desc2: null,
                notice: null
            },
            {
                img: '11_1.png',
                img2: '11_2.png',
                name: '黛比',
                price: 50,
                desc1: '黛比，景天科，風車草屬和擬石蓮屬雜交種。黛比的葉片呈蓮花狀排列，葉片厚實呈長匙型，葉片前端呈三角形，葉色粉紫到紫紅，是為數不多的能全年呈現粉紫色的多肉植物。台灣的夏天還是會偏灰綠一些喔，不過冬天的黛比真的很美，紫紅色像朵鮮花般非常浪漫。',
                desc2: null,
                notice: null
            },
            {
                img: '12_1.png',
                img2: '12_2.png',
                name: '佛手',
                price: 40,
                desc1: '佛手，龍舌蘭科虎尾蘭屬，學名為：Sansevieria cylindrica var.patula ‘boncel’。扇形的佛手，像如來佛掌般，一根一根的棒狀葉像手指張開來，而有佛手之稱。',
                desc2: '佛手虎尾蘭對生存環境要求不嚴，是一種非常適合裝飾客廳、書房等場所的盆栽植物，他最大的特點與好處是能淨化空氣。據專家介紹，虎尾蘭可吸收室內80%以上的有害氣體，對於吸收甲醛的能力特別強，在新裝修的房屋中具有明顯的實用性，功能與美貌性俱佳的虎尾蘭盆栽還能防輻射喔！',
                notice: null
            },
            {
                img: '13_1.png',
                img2: '13_2.png',
                name: '藍鳥',
                price: 50,
                desc1: '藍鳥為景天科擬石蓮屬，市面上的藍鳥有跟分成厚葉與薄葉型。藍鳥的葉面上頭披了一層淡淡的白粉，是他的防曬機制，雨淋多了、或是手指稍微碰觸到白粉也會掉，外圍的葉子掉了之後白粉也不會再長回來，不過新長出來的葉面白粉也會跟著長出來。',
                desc2: null,
                notice: null
            },
            {
                img: '14_1.png',
                img2: '14_2.png',
                name: '晚禮服',
                price: 50,
                desc1: '晚禮服，景天科，擬石蓮花屬，學名：Echeveria cv.‘Evening Dress’。',
                desc2: '晚禮服是帶有捲邊的擬石蓮屬多肉，在台灣我們習慣稱之「捲葉多肉」、或者是「高麗菜多肉」。屬於長莖型的多肉，隨著年紀的增長，莖亦會越來越明顯。從中心點長出新葉，一層一層往外擴張，陽光充足的情況下，他的型態會緊實且偏暗紅色，對於陽光的需求度高，若要維持這些特色，在陽光充足的地方生長實屬必要，若發現他開始長高，且外圍的葉子往下垂，表示植物非常缺光，需要移至陽光下行更多的光合作用了。',
                notice: null
            },
            {
                img: '15_1.png',
                img2: '15_2.png',
                name: '奇幻噴泉',
                price: 50,
                desc1: '奇幻噴泉，景天科，擬石蓮屬，英文名為：Fantastic Fountain。台灣資深前輩紀俊漢的自育種，奇幻噴泉的整片葉面兩側上翻，明顯凹折，蓮座狀，每一層葉片生長位置剛好在上一層的正上方，緊密的植株看起來就像噴泉般湧現。',
                desc2: null,
                notice: null
            },
            {
                img: '16_1.png',
                img2: '16_2.png',
                name: '數珠星錦',
                price: 50,
                desc1: '數珠星錦學名：Crassula ‘Baby Necklace’ variegated。後面的variegated代表錦斑之意，樣態較為少見。',
                desc2: '數珠星錦是星星家族的其中一員，形似中國古代串錢的模樣，在香港這類型的植物又稱為：「錢串」，有招財的好意涵。',
                notice: null
            },
            {
                img: '17_1.png',
                img2: '17_2.png',
                name: '石頭玉',
                price: 40,
                desc1: '石頭玉，番杏科生石花屬的多肉植物。為台灣的俗稱，外型如石頭、實則似寶玉般珍貴。因外型獨特、頂端平坦、十字對生、中間有裂縫，台灣人也會稱為：屁屁、屁屁花。主要產於南非和納米比亞，生長於砂石地帶、遍佈於大石塊、小石頭間，原生地猛然一看，幾乎看不見他的蹤影，蹲下來細細觀察，才會發現他們隱身其中。為什麼他們的外型如此特殊呢？肥厚的儲水組織，在原生地可是美味可口，為了避免被動物吃掉，他的表面紋理能把植株與周圍環境和諧的融合。另外，石頭玉的葉子很少是綠色，常見的顏色多為奶油色、灰色、土黃色等，圓點和紅線構成了葉子行光合作用的窗口區域。',
                desc2: null,
                notice: null
            },
            {
                img: '18_1.png',
                img2: '18_2.png',
                name: '愛之蔓',
                price: 50,
                desc1: '愛之蔓，夾竹桃科吊鐘花屬 Ceropegia woodii。中文名字聽起來真有意境：如愛心般的藤蔓。而英文名字是：String of hearts，串串心，果真如其名，枝條型的生長，左右兩邊長出對真的愛心小葉子。而愛之蔓除了有可愛的心形葉外，另一個特色是，成熟植株的葉柄基部，會長出一顆顆的圓形塊莖，看起來就像一串串念珠，故還有一個英名為Rosary Vine（念珠藤）。',
                desc2: null,
                notice: null
            },
            {
                img: '19_1.png',
                img2: '19_2.png',
                name: '斑葉百萬心',
                price: 50,
                desc1: '斑葉百萬心，蘿藦科眼樹蓮屬。跟愛之蔓相同，斑葉百萬心也是百萬心的出錦版本，不過不像愛之蔓錦這般明顯，斑葉百萬心的邊框微微的帶點米白色，中間的綠像是摻了點牛奶般粉嫩粉嫩的。若想要這些多肉長得肥肥嫩嫩，可以添加些長效肥喲！',
                desc2: null,
                notice: null
            },
            {
                img: '20_1.png',
                img2: '20_2.png',
                name: '白烏帽子',
                price: 100,
                desc1: '仙人掌科，仙人掌屬，夏季生。日本又稱白烏帽子為「白桃扇」、台灣會叫他米老鼠。他的花期很短，盛開時只有一天。他全身長滿白色毛毛的萌樣就輕忽大意，仔細一看這些其實是一團一團的「刺」呢。',
                desc2: null,
                notice: null
            },
        ];

        plants.forEach((plant, index) => {
            $('#plants_win').append(`
            <div class="plants_item plants_item_${index + 1}">
                <img class="plants_img" src="./images/${plant.img}" />
                <div class="plants_text">${plant.name}</div>
                <div class="plants_price">${plant.price}元</div>
                <i class="fa-regular fa-plus plants_cart"></i>
            </div>
        `);
        });

        const $container = $('#showmore_win_container');

        plants.forEach((plant, index) => {
            let html = `
                    <div class="showmore_win" id="showmore_win_${index + 1}" title="${plant.name}">
                    <img src="./images/${plant.img}" alt="${plant.name}">
                    <p>${plant.desc1}</p>
                `;

            if (plant.desc2) {
                html += `<p>${plant.desc2}</p>`;
            }
            if (plant.notice) {
                html += `<p id="notice"><i class="fa-solid fa-triangle-exclamation"></i>${plant.notice}</p>`;
            }

            $container.append(html);
        });

        $(document).on('click', '.plants_cart', function () {
            const parent = $(this).closest('.plants_item');
            const name = parent.find('.plants_text').text();
            const price = parent.find('.plants_price').text();
        });


        $('#cart , #item_num').click(function () {
            $('#login_win').fadeOut(400);
            $('#talk_win').fadeOut(400);
            $('#login , #talk').css('background-color', '');
            $('#login , #talk').css('color', 'white');
            $('#cart_win').fadeIn(400);
            $('#cart , #item_num').css('background-color', 'rgb(168, 163, 156)');
            $('#cart , #item_num').css('color', 'rgb(47, 71, 59)');
        });

        $('#cart_win_close').click(function () {
            $('#cart_win').fadeOut(400);
            $('#cart , #item_num').css('background-color', '');
            $('#cart , #item_num').css('color', 'white');
        });
        var buy_list = [];
        var serial = 0;
        var total = 0;

        $('.plants_cart').click(function (e) {
            e.stopPropagation();
            var $par = $(this).closest('.plants_item');
            var $price = $par.find('.plants_price');
            var $img = $par.find('.plants_img');
            var $text = $par.find('.plants_text');
            total = total + parseInt($price.text());
            $('#total').text(`total : ${total}`);

            serial++;

            var item_obj = {
                no: serial,
                src: $img.attr('src'),
                text: $text.text(),
                price: $price.text()
            };

            buy_list.push(item_obj);

            var $item = $('<div class="cart_item">\
                            <img class="cart_img" src="./images/plant.jpg" />\
                            <div class="cart_text">不美麗。不漂亮。</div>\
                            <div class="cart_price">$18000</div>\
                            <div class="cart_delete">X</div>\
                        </div>');

            $('#cart_win').append($item);

            $item.attr('no', item_obj.no);
            $item.find('.cart_price').text(item_obj.price);
            $item.find('.cart_text').text(item_obj.text);
            $item.find('.cart_img').attr('src', item_obj.src);


            $item.find('.cart_delete').click(function () {
                var n = $item.attr('no');
                for (var i = 0; i < buy_list.length; i++) {
                    if (n == buy_list[i].no) {
                        buy_list.splice(i, 1);
                        break;
                    }
                }
                total = total - parseInt($price.text());
                $('#total').text(`total : ${total}`);

                $(this).parent().remove();
                $('#item_num').text(buy_list.length);
            });

            $('#item_num').text(buy_list.length);

        });  //end$('.clothes_cart').click(function(){

        var products = {
            1: { name: '熊童子', price: 50 },
            2: { name: '雀扇', price: 80 },
            3: { name: '秋麗', price: 80 },
            4: { name: '白牡丹', price: 30 },
            5: { name: '白姬之舞', price: 40 },
            6: { name: '蕾絲姑娘', price: 30 },
            7: { name: '聖誕東雲', price: 40 },
            8: { name: '立方霜', price: 50 },
            9: { name: '龍骨', price: 50 },
            10: { name: '姬朧月', price: 50 },
            11: { name: '黛比', price: 50 },
            12: { name: '佛手', price: 40 },
            13: { name: '藍鳥', price: 50 },
            14: { name: '晚禮服', price: 50 },
            15: { name: '奇幻噴泉', price: 50 },
            16: { name: '數珠星錦', price: 50 },
            17: { name: '石頭玉', price: 40 },
            18: { name: '愛之蔓', price: 50 },
            19: { name: '斑葉百萬心', price: 50 },
            20: { name: '白烏帽子', price: 100 }
        };

        for (let i = 1; i <= 20; i++) {

            $("#showmore_win_" + i).dialog({
                autoOpen: false,
                modal: true,
                show: {
                    effect: 'slide',
                    direction: 'up',
                    duration: 400
                },
                hide: {
                    effect: 'clip',
                    direction: 'center',
                    duration: 400
                },
                buttons: {
                    'Add To Cart': function () {

                        serial++;

                        var product = products[i];

                        var item_obj = {
                            no: serial,
                            src: "./images/" + i + "_1.png",
                            text: product.name,
                            price: product.price
                        };

                        buy_list.push(item_obj);

                        var $item = $(`
                    <div class="cart_item" no="${serial}">
                        <img class="cart_img" src="${item_obj.src}" />
                        <div class="cart_text">${product.name}</div>
                        <div class="cart_price">${product.price}元</div>
                        <div class="cart_delete">X</div>
                    </div>
                `);

                        $('#cart_win').append($item);

                        total += product.price;
                        $('#total').text(`total : ${total}`);

                        $('#item_num').text(buy_list.length);
                    }
                }
            });

            $('#cart_win').on('click', '.cart_delete', function () {

                var $item = $(this).closest('.cart_item');
                var n = $item.attr('no');

                for (var i = 0; i < buy_list.length; i++) {
                    if (n == buy_list[i].no) {
                        total -= buy_list[i].price;
                        buy_list.splice(i, 1);
                        break;
                    }
                }

                $('#total').text(`total : ${total}`);
                $('#item_num').text(buy_list.length);

                $item.remove();
            });

            // 點擊開啟 dialog
            $(".plants_item_" + i).click(function () {
                $("#showmore_win_" + i).dialog("open");
            });
        }

        $('#login').click(function () {
            $('#cart_win').fadeOut(400);
            $('#talk_win').fadeOut(400);
            $('#cart , #item_num , #talk').css('background-color', '');
            $('#cart , #item_num , #talk').css('color', 'white');
            $('#login_win').fadeIn(400);
            $(this).css('background-color', 'rgb(168, 163, 156)');
            $(this).css('color', 'rgb(47, 71, 59)');
        });

        $('#login_win_close').click(function () {
            $('#login_win').fadeOut(400);
            $('#login').css('background-color', '');
            $('#login').css('color', 'white');
        });

        $('#talk').click(function () {
            $('#cart_win').fadeOut(400);
            $('#login_win').fadeOut(400);
            $('#cart , #item_num , #login').css('background-color', '');
            $('#cart , #item_num, #login').css('color', 'white');
            $('#talk_win').fadeIn(400);
            $(this).css('background-color', 'rgb(168, 163, 156)');
            $(this).css('color', 'rgb(47, 71, 59)');
        });

        $('#talk_win_close').click(function () {
            $('#talk_win').fadeOut(400);
            $('#talk').css('background-color', '');
            $('#talk').css('color', 'white');
        });

        $('#reply_win_close').click(function () {
            $('#reply_win').fadeOut(400);
        });

        $('#send').click(function () {
            $('#history').append(`<div class="problem_send"><p class="myproblem">問：${$('#problem').val()}</p><button class="reply">reply</button><br></div><hr>`);
            $('#problem').val('');

            $('.reply').click(function () {
                $(this).closest('.problem_send').append('<div class="replyproblem"><input type="text" name="problem" class="replyproblem_send" value=""><button class="reply_send">send reply</button>');
                $('.reply_send').click(function () {
                    $(this).parent().parent().append(`<p>回覆：${$('.replyproblem_send').val()}</p>`);
                    $('.replyproblem').val('');
                    $('.replyproblem').remove();
                });
            });
        });

        $('#login_btn').click(function () {
            $('#login').removeClass("login");
            $('#login').addClass("login_success");
            $('#login').text($('#account').val());
            $('#login_win').fadeOut(400);
            $('#login').css('background-color', '');
            $('#login').css('color', 'white');
        });

        $('#plants_imgshow').each(function () {

            let slideImgs = $(this).find('img'),
                slideImgsCount = slideImgs.length,
                currentIndex = 0;

            slideImgs.eq(currentIndex).fadeIn();

            setInterval(showNextSlide, 3000);

            function showNextSlide() {
                let nextIndex = (currentIndex + 1) % slideImgsCount;
                slideImgs.eq(currentIndex).fadeOut();
                slideImgs.eq(nextIndex).fadeIn();
                currentIndex = nextIndex;
            }
        })

    });