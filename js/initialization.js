//Khoi tao danh sach san pham
function createProduct() {
    if (localStorage.getItem('products') == null) {
        let products = [{
            id: 1,
            status: 1, 
            title: 'Góc Nhỏ Có Nắng',
            img: './assets/img/products/goc-nho-co-nang.png',
            category: 'Món mặn',
            price: 68000,
            desc: '"Góc Nhỏ Có Nắng" là cuốn sách tô màu với 30 chủ đề đa dạng, giúp thư giãn và chữa lành tâm hồn qua những bức tranh đẹp mắt và đơn giản. Khám phá sự sáng tạo của riêng bạn với màu sắc tùy ý trên chất liệu giấy dày, mịn, mang lại trải nghiệm tô màu thú vị.'
        },
        {
            id: 2,
            status: 1, 
            title: 'Tô Bình Yên Vẽ Hạnh Phúc',
            img: './assets/img/products/to-binh-yen-ve-hanh-phuc.png',
            category: 'Món mặn',
            price: 88000,
            desc: 'Rau củ quả theo mùa tươi mới xào với nước mắm chay, gia vị để giữ được hương vị ngọt tươi nguyên thủy của rau củ, một món nhiều vitamin và chất khoáng, rất dễ ăn.'
        },
        {
            id: 3,
            status: 1, 
            title: 'Nhà Giả Kim',
            img: './assets/img/products/nha-gia-kim.png',
            category: 'Món mặn',
            price: 79000,
            desc: '"Nhà Giả Kim" của Paulo Coelho kể về hành trình của Santiago, chàng chăn cừu tìm kiếm kho báu theo giấc mơ tại Kim Tự Tháp Ai Cập. Qua chuyến phiêu lưu, cậu thấu hiểu ý nghĩa hạnh phúc, sự hòa hợp với vũ trụ và con người. Với triết lý phương Đông sâu sắc, cuốn sách đã vượt biên giới và làm rung động hàng triệu độc giả, trở thành tác phẩm bán chạy và có sức ảnh hưởng lớn trên toàn thế giới.'
        },
        {
            id: 4,
            status: 1, title: '999 Lá Thư Gửi Cho Chính Mình',
            img: './assets/img/products/999-la-thu-gui-cho-chinh-minh.png',
            category: 'Món mặn',
            price: 99000,
            desc: '"999 Lá Thư Gửi Cho Chính Mình - Tô Màu Cuộc Sống" là cuốn sách kết hợp giữa những lá thư đầy ý nghĩa và tranh tô màu sinh động, giúp bạn tìm lại niềm vui từ những điều nhỏ bé quanh mình. Qua việc tô màu, cuốn sách hướng đến chữa lành và mang lại hạnh phúc cho tâm hồn, giúp cuộc sống trở nên rực rỡ và lấp đầy năng lượng tích cực.'
        },
        {
            id: 5,
            status: 1, 
            title: 'Lén Nhặt Chuyện Đời',
            img: './assets/img/products/len-nhat-chuyen-doi.png',
            category: 'Món mặn',
            price: 85000,
            desc: '"Lén Nhặt Chuyện Đời" là cuốn sách tập hợp những câu chuyện giản dị, đời thường, giống như những viên charm lấp lánh trên chiếc vòng Pandora, mỗi viên đại diện cho một kỷ niệm. Tác giả lặng lẽ thu nhặt những mẩu chuyện về tình yêu, gia đình, người trẻ và cuộc sống, rồi kết thành quyển sách. Đây là hành trình tự sự, không giảng giải, mà chỉ mong bạn đọc tìm được điều gì đó phù hợp với bản thân mình.'
        },

        {
            id: 6,
            status: 1, 
            title: 'Trường Ca Achilles',
            img: './assets/img/products/truong-ca-achilles.png',
            category: 'Món mặn',
            price: 156000,
            desc: '"Trường Ca Achilles" kể về tình bạn và tình yêu sâu sắc giữa Patroclus và Achilles, từ khi còn là hai cậu bé cho đến khi trưởng thành, cùng tham gia cuộc chiến thành Troy. Dựa trên sử thi Iliad, tác giả Madeline Miller tái hiện lại cuộc chiến vĩ đại với những xung đột cảm xúc và sự hy sinh. Cuốn sách đã đoạt giải Orange 2012 và nằm trong top bán chạy của New York Times.'
        },

        {
            id: 7,
            status: 1, 
            title: 'Trốn Lên Mái Nhà Để Khóc',
            category: 'Món mặn',
            img: './assets/img/products/tron-len-mai-nha-de-khoc.png',
            price: 95000,
            desc: '"Trốn Lên Mái Nhà Để Khóc" của Lam là một cuốn sách tản văn gợi lên những hoài niệm về gia đình, tuổi thơ và những cảm xúc bình yên từ quá khứ. Những mẩu chuyện đong đầy tình yêu thương của mẹ, bà, và những kỷ niệm tuổi thơ, giúp độc giả tìm thấy sự bình yên giữa cuộc sống bộn bề. Cuốn sách là một mái nhà tinh thần, nơi người đọc có thể trốn vào để thả lỏng cảm xúc, hồi tưởng, và lấy lại sức mạnh tiếp tục cuộc hành trình trưởng thành.'
        },

        {
            id: 8,
            status: 1, 
            title: 'Tết Ở Làng Địa Ngục',
            img: './assets/img/products/tet-o-lang-dia-nguc.png',
            category: 'Món mặn',
            price: 169000,
            desc: '"Tết Ở Làng Địa Ngục" của Thảo Trang là một tác phẩm kinh dị Việt Nam lấy bối cảnh một ngôi làng xa xôi, nơi người dân sống trong sợ hãi về quá khứ tội lỗi. Vào đêm cuối năm, ông Thập nhận điềm báo từ một âm hồn mặc quan phục đỏ, báo hiệu tai ương sắp đến. Ngôi làng, vốn là hậu duệ của băng cướp Truông Nhà Hồ, đối diện với thế lực siêu nhiên và bi kịch trong dịp Tết. Câu chuyện đậm chất huyền bí và rùng rợn, để lại dư âm khó phai khi gấp sách lại.'
        },

        {
            id: 9,
            status: 1, 
            title: 'Thanh Trà',
            category: "Nước uống",
            img: './assets/img/products/',
            price: 80000,
            desc: 'Giáo sư Phương Lựu từ NXB Văn Học nhận xét rằng "Nhật ký trong tù" của Bác Hồ, dù viết bằng chữ Hán, khác biệt với thơ Đường truyền thống. Thơ của Bác không sử dụng ngôn từ cổ điển mà có sự kết hợp giữa từ vựng cổ và bạch thoại. Bác không tuân theo các quy tắc đối thanh, đối ý của thơ Đường mà tập trung vào thể loại tứ tuyệt tự sự, với mục đích ghi nhật ký và kể chuyện. Điều này thể hiện sự sáng tạo độc đáo của Bác trong việc tạo ra thể thơ tứ tuyệt tự sự, khác biệt với thơ Đường luật thường trữ tình hoặc tả cảnh. Thơ của Bác, mặc dù chứa đựng nhiều chi tiết đời thường, phản ánh một tâm hồn đồng cảm và nhân cách lớn, cùng khát vọng tự do.',
        },
        {
            id: 10,
            status: 1, 
            title: 'Trà đào chanh sả',
            category: "Nước uống",
            img: './assets/img/products/tra-dao-chanh-sa.jpg',
            price: 25000,
            desc: 'Trà đào chanh sả có vị đậm ngọt thanh của đào, vị chua chua dịu nhẹ của chanh và hương thơm của sả.',
        },
        {
            id: 11,
            status: 1, 
            title: 'Bánh chuối nướng',
            category: 'Món tráng miệng',
            img: './assets/img/products/banh-chuoi-nuong.jpeg',
            price: 60000,
            desc: 'Bánh chuối nướng béo ngậy mùi nước cốt dừa cùng miếng chuối mềm ngon sẽ là Món tráng miệng phù hợp với mọi người.'
        },
        {
            id: 12,
            status: 1, 
            title: 'Nhật Ký Trong Tù (Tái Bản)',
            img: './assets/img/products/nhat-ki-trong-tu.png',
            category: 'Món mặn',
            price: 80000,
            desc: 'Giáo sư Phương Lựu từ NXB Văn Học nhận xét rằng "Nhật ký trong tù" của Bác Hồ, dù viết bằng chữ Hán, khác biệt với thơ Đường truyền thống. Thơ của Bác không sử dụng ngôn từ cổ điển mà có sự kết hợp giữa từ vựng cổ và bạch thoại. Bác không tuân theo các quy tắc đối thanh, đối ý của thơ Đường mà tập trung vào thể loại tứ tuyệt tự sự, với mục đích ghi nhật ký và kể chuyện. Điều này thể hiện sự sáng tạo độc đáo của Bác trong việc tạo ra thể thơ tứ tuyệt tự sự, khác biệt với thơ Đường luật thường trữ tình hoặc tả cảnh. Thơ của Bác, mặc dù chứa đựng nhiều chi tiết đời thường, phản ánh một tâm hồn đồng cảm và nhân cách lớn, cùng khát vọng tự do.'
        },
        {
            id: 13,
            status: 1, 
            title: 'Người Đàn Ông Mang Tên OVE',
            img: './assets/img/products/nguoi-dan-ong-mang-ten-ove.png',
            category: 'Món mặn',
            price: 160000,
            desc: 'Người đàn ông mang tên Ove, 59 tuổi, là kiểu người cứng nhắc, nguyên tắc và hay chỉ trích những người xung quanh. Ông lên kế hoạch tự tử nhưng liên tục bị làm phiền bởi những sự cố không mong muốn, từ cặp đôi trẻ tuổi đến con mèo hoang. Những tình huống này dần thay đổi cuộc sống của ông. Cuốn sách, với sự kết hợp giữa trào lộng Bắc Âu và nhân văn sâu sắc, đã bán gần 3 triệu bản và được dịch sang 40 ngôn ngữ. Bộ phim chuyển thể từ sách cũng được đề cử Oscar 2017.'
        },
        {
            id: 14,
            status: 1, 
            title: 'Nộm gà Hội An (1 phần)',
            img: './assets/img/products/nom_ga_hoi_an.png',
            category: 'Món mặn',
            price: 60000,
            desc: 'Nộm gà làm từ thịt gà ri thả đồi. Thịt gà ngọt, săn được nêm nếm vừa miệng, bóp thấu với các loại rau tạo thành món nộm thơm ngon, đậm đà, giải ngán hiệu quả.'
        },
        {
            id: 15,
            status: 1, 
            title: 'Set bún cá (1 set 5 bát)',
            img: './assets/img/products/set_bun_ca.jpg',
            category: 'Món mặn',
            price: 60000,
            desc: 'Bún cá được làm đặc biệt hơn với cá trắm lọc xương và chiên giòn, miếng cá nhúng vào nước dùng ăn vẫn giòn dai, thơm ngon vô cùng.'
        },
        {
            id: 16,
            status: 1, 
            title: 'Bún cá (1 phần)',
            img: './assets/img/products/set_bun_ca.jpg',
            category: 'Món mặn',
            price: 60000,
            desc: 'Bún cá được làm đặc biệt hơn với cá trắm lọc xương và chiên giòn, miếng cá nhúng vào nước dùng ăn vẫn giòn dai, thơm ngon vô cùng'
        },
        {
            id: 17,
            status: 1, 
            title: 'Xôi trắng hành phi (1 phần)',
            img: './assets/img/products/bun_ca_hanh_phi.jpeg',
            category: 'Món mặn',
            price: 60000,
            desc: 'Bún cá được làm đặc biệt hơn với cá trắm lọc xương và chiên giòn, miếng cá nhúng vào nước dùng ăn vẫn giòn dai, thơm ngon vô cùng'
        },
        {
            id: 18,
            status: 1, 
            title: 'Tôm sú lột rang thịt (1 phần)',
            img: './assets/img/products/tom_su_luot_ran_thit.png',
            category: 'Món mặn',
            price: 60000,
            desc: 'Tôm sú tươi rim với thịt. rim kỹ, vừa lửa nên thịt và tôm săn lại, ngấm vị, càng ăn càng thấy ngon.'
        },
        {
            id: 19,
            status: 1, 
            title: 'Bánh cookie dừa',
            img: './assets/img/products/banh_cookie_dua.jpeg',
            category: 'Món mặn',
            price: 130000,
            desc: 'Bánh cookie dừa ngọt vừa miệng, dừa bào tươi nhào bánh nướng giòn tan, cắn vào thơm lừng, giòn rụm'
        },
        {
            id: 20,
            status: 1, 
            title: 'Cá chiên giòn sốt mắm Thái',
            img: './assets/img/products/sot_mam_thai.jpeg',
            category: 'Món mặn',
            price: 130000,
            desc: 'Bánh cookie dừa ngọt vừa miệng, dừa bào tươi nhào bánh nướng giòn tan, cắn vào thơm lừng, giòn rụm'
        },
        {
            id: 21,
            status: 1, 
            title: 'Tôm sú rang muối (1 suất)',
            category: 'Món mặn',
            img: './assets/img/products/tom-su-rang-muoi.jpeg',
            price: 550000,
            desc: 'Từng chú tôm sú được chọn lựa kĩ càng mỗi ngày, đảm bảo là tôm tươi sống, vẫn còn đang bơi khỏe. Tôm rang muối vừa đậm đà lại vẫn giữ được vị ngọt tự nhiên của tôm sú.'
        },
        {
            id: 22,
            status: 1, 
            title: 'Tôm sú rang bơ tỏi (1 suất)',
            category: 'Món mặn',
            img: './assets/img/products/tom-su-rang-bo-toi.jpeg',
            price: 550000,
            desc: 'Tôm được chiên vàng giòn bên ngoài, bên trong thịt tôm vẫn mềm, kết hợp cùng sốt bơ tỏi thơm nức . Tôm tươi được Bếp Hoa chiên theo bí quyết riêng nên phần thịt tôm bên trong sẽ có hương vị thơm ngon đặc biệt, sốt bơ tỏi béo ngậy hấp dẫn. Ăn kèm bánh mỳ rất hợp'
        },

        {
            id: 23,
            status: 1, 
            title: 'Combo Vịt quay và gỏi vịt',
            category: 'Món mặn',
            img: './assets/img/products/combo-vitquay-va-goivit.jpeg',
            price: 510000,
            desc: 'Combo vịt quay Bếp Hoa + gỏi vịt bắp cải size đại cực kỳ thích hợp cho những bữa ăn cần nhiều rau, nhiều đạm mà vẫn đảm bảo ngon miệng. Vịt quay chuẩn Macao giòn da thấm thịt, thêm phần gỏi vịt chua chua ngọt ngọt, rau tươi giòn ăn chống ngán, cân bằng dinh dưỡng.'
        },

        {
            id: 24,
            status: 1, 
            title: 'Set cá cơm tầm',
            img: './assets/img/products/set_ca_tam.jpg',
            category: 'Món mặn',
            price: 950000,
            desc: 'Một 1 set với 3 món ngon mỹ mãn đủ 4 người ăn no, bếp trưởng tự tay chọn từng con cá tầm tươi đủ chất lượng để chế biến đủ 3 món gỏi, nướng, canh chua 10 điểm cho chất lượng.'
        },
        {
            id: 25,
            status: 1, 
            title: 'Chả ốc 1 phần',
            img: './assets/img/products/cha_oc_1_phan.jpeg',
            category: 'Món mặn',
            price: 350000,
            desc: 'Chả ốc với ốc giòn tan, băm rối, trộn với thịt, lá lốt, rau thơm, nêm nếm vừa ăn và viên tròn, chiên cho giòn ngoài mềm trong. Ăn chả ốc kẹp với rau sống và chấm mắm chua ngọt cực kỳ đưa vị.'
        },

        {
            id: 26,
            status: 1, 
            title: 'Gà ủ muối thảo mộc (1 con)',
            category: 'Món mặn',
            img: './assets/img/products/ga-u-muoi-thao-moc.png',
            price: 450000,
            desc: 'Gà ủ muối tuyển chọn từ gà ri tươi, ủ muối chín tới với gia vị thảo mộc tự nhiên, da gà mỏng, thịt chắc ngọt.'
        },

        {
            id: 27,
            status: 1, 
            title: 'Gà không lối thoát (1 con)',
            category: 'Món mặn',
            img: './assets/img/products/ga-khong-loi-thoat.png',
            price: 520000,
            desc: 'Gà mái ghẹ size 1.4kg sơ chế sạch sẽ, tẩm ướp gia vị đậm đà, bọc vào trong xôi dẻo từ nếp cái hoa vàng, chiên cho giòn mặt ngoài. Khi ăn cắt phần xôi là gà thơm ngon nghi ngút khói, thịt gà ngấm mềm thơm, miếng xôi ngọt tự nhiên từ thịt gà ăn cực kỳ hấp dẫn.'
        },

        {
            id: 28,
            status: 1, 
            title: 'Cá chiên giòn mắm Thái (1 con)',
            category: 'Món mặn',
            img: './assets/img/products/ca-chien-gion-mam-thai.jpeg',
            price: 350000,
            desc: 'Cá tươi bếp làm sạch, lạng đôi, ướp cho ngấm và chiên vàng giòn. Thịt cá bên trong óng ánh nước, mềm ngọt, bên ngoài giòn tan hấp dẫn. Thêm sốt mắm Thái đầu bếp làm công thức riêng, vị mắm chua ngọt cay the cực kỳ hợp với cá giòn nóng hổi.'
        },

        {
            id: 29,
            status: 1, 
            title: 'Chân giò chiên giòn mắm Thái',
            category: 'Món mặn',
            img: './assets/img/products/chan-gio-chien-gion-mam-thai.jpeg',
            price: 420000,
            desc: 'Chân giò lợn đen chọn loại ngon, tỉ lệ nạc mỡ đều đặn, bếp xâm bì cẩn thận và ướp thật ngon, chiên vàng giòn nổi bóng, khi ăn chấm mắm chua ngọt cay cay cực kỳ ngon miệng.'
        },

        {
            id: 30,
            status: 1, 
            title: 'Chả cốm (500gr)',
            category: 'Món mặn',
            img: './assets/img/products/cha-com.png',
            price: 175000,
            desc: 'Cốm mộc làng Vòng hạt dẹt dẻo và thơm đặc biệt, thịt lợn tươi phải chọn phần thịt vai xay vừa mềm lại không bở, trộn đều với cốm, nêm với mắm ngon, gia vị đơn giản và quật hỗn hợp thịt xay và cốm đến khi nào thật chắc và dẻo. Viên mỗi bánh chả phải đều tay, hấp sơ qua cho thành hình, khi ăn mới chiên vàng. Chả cốm khi cắn vào phải giòn và lại thật mềm, tứa nước trong miệng. Cốm dẻo dẻo cuộn trong thịt thơm ngon lạ kỳ.'
        },

        {
            id: 31,
            status: 1, 
            title: 'Vịt om sấu (1 hộp)',
            category: 'Món mặn',
            img: './assets/img/products/vit-om-sau.jpeg',
            price: 350000,
            desc: '[Mỗi phần có 1,2kg thịt vịt]. Vịt om sấu với thịt vịt mềm thơm, nấu với trái sấu, sả cây, ớt tươi cho ra phần nước om chua thanh và rất thơm. Dùng vịt om sấu với rau mùi tàu, rau thơm và bún rất ngon.'
        },

        {
            id: 32,
            status: 1, 
            title: 'Giò xào (1kg)',
            category: 'Món mặn',
            img: './assets/img/products/gio-xao.jpeg',
            price: 460000,
            desc: 'Giò xào Bếp Hoa đặc biệt được xào khô, ép chặt để tạo độ giòn. Nguyên liệu chính được làm từ tai và lưỡi heo. Khi ăn giò xào, bạn sẽ cảm nhận từng miếng giò vừa giòn vừa thơm lừng mùi tiêu đen và nước mắm.'
        },

        {
            id: 33,
            status: 1, 
            title: 'Nem tai (1 hộp)',
            category: 'Món mặn',
            img: './assets/img/products/nem-tai.jpeg',
            price: 200000,
            desc: 'Nem tai giòn sần sật, trộn với thính gạo rang thơm, ăn kèm lá sung bùi bùi, chấm tương ớt hoặc nước chấm đặc điệt, công thức chỉ riêng Bếp Hoa có.'
        },

        {
            id: 34,
            status: 1, 
            title: 'Canh dưa bò hầm (1 hộp)',
            category: 'Món mặn',
            img: './assets/img/products/canh-dua-bo-ham.jpeg',
            price: 270000,
            desc: 'Canh dưa chua hầm nhừ với thịt nạm bò và gân bò. Thơm - ngon - ngọt - béo - chua dịu thanh thanh'
        },

        {
            id: 35,
            status: 1, 
            title: 'Nạc nọng heo nướng kèm xôi trắng (500gr)',
            category: 'Món mặn',
            img: './assets/img/products/nac-nong-heo-nuong-kem-xoi-trang.jpeg',
            price: 300000,
            desc: 'Nọng heo - phần thịt ngon nhất trên thủ heo, với những dải thịt nạc mỡ đan xen, mỗi thủ chỉ có được 1-2kg thịt nọng ngon mềm như vậy. Bếp trưởng Bếp Hoa tẩm ướp thật ngấm gia vị, nướng thẳng trên than hoa thơm nức, xém cạnh đẹp mắt. Miếng thịt nướng xong gắp khỏi vỉ vẫn thấy mỡ thơm còn sôi trên dải thịt, để thịt nghỉ vài phút khi thái ra óng ánh nước, gắp miếng thịt chấm với nước sốt siêu ngon độc quyền của Bếp, ngon đến tứa nước miếng, tranh nhau gắp sạch đĩa'
        },

        {
            id: 36,
            status: 1, 
            title: 'Thịt quay (400gr)',
            category: 'Món mặn',
            img: './assets/img/products/thit-quay.jpeg',
            price: 280000,
            desc: 'Thịt lợn quay thơm mùi lá mắc mật. Ngoài bì giòn rụm, thịt bên trong mềm, hương vị đậm đà. Đặc biệt, bếp có loại sốt chấm thịt được pha bằng công thức riêng biệt chỉ Bếp Hoa mới có.Hướng dẫn sử dụng: Sử dụng ngay trong ngày. Bảo quản trong tủ mát.'
        },

        {
            id: 37,
            status: 1, 
            title: 'Khâu nhục',
            category: 'Món mặn',
            img: './assets/img/products/khau-nhuc.jpeg',
            price: 280000,
            desc: 'Khâu nhục - món ăn cầu kỳ mang phong vị phương Bắc. Làm từ thịt lợn ta, khâu khục được hấp cách thủy trong 6 tiếng cùng với rất nhiều loại gia vị. Thịt mềm nhừ, ngọt vị, phần bì trong và dẻo quẹo. Mỡ ngậy ngậy tan chảy ngay khi vừa đưa lên miệng. Hướng dẫn bảo quản: Hâm nóng lại bằng nồi hấp cách thủy hoặc lò vi sóng. Bảo quản trong tủ mát từ 3-5 ngày.'
        },
        {
            id: 38,
            status: 1, 
            title: 'Xíu mại tôm thịt ( 10 viên)',
            category: 'Món mặn',
            img: './assets/img/products/ha_cao_tom_thit.jpg',
            price: 140000,
            desc: 'Những miếng há cảo, sủi cảo, hoành thánh với phần nhân tôm, sò điệp, hải sản tươi ngon hay nhân thịt heo thơm ngậy chắc chắn sẽ khiến bất kỳ ai thưởng thức đều cảm thấy rất ngon miệng.'
        },
        {
            id: 39,
            status: 1, 
            title: 'Chè hương cốm lá dứa',
            category: 'Món tráng miệng',
            img: './assets/img/products/che-com-la-dua.jpeg',
            price: 60000,
            desc: 'Chè cốm hương lá dứa dẻo thơm, ngọt dịu, từng hạt cốm thoảng thoảng đâu đó hương lá dứa mát lành'
        },

        {
            id: 40,
            status: 1, 
            title: 'Bánh bông lan chanh dây',
            category: 'Món tráng miệng',
            img: './assets/img/products/banh-bong-lan-chanh-day.jpeg',
            price: 50000,
            desc: 'Bánh bông lan chanh dây với vị chua nhẹ, không bị ngọt gắt hẳn sẽ là sự lựa chọn hoàn hảo'
        },

        {
            id: 41,
            status: 1, 
            title: 'Chè bưởi',
            category: 'Món tráng miệng',
            img: './assets/img/products/che-buoi.jpeg',
            price: 50000,
            desc: 'Chè bưởi rất dễ ăn bởi hương vị ngọt mát, thơm ngon, vị bùi bùi của đậu xanh, giòn sần sật của cùi bưởi mà không hề bị đắng'
        },
        {
            id: 42,
            status: 1, 
            title: 'Set lẩu Thái tomyum',
            category: "Món lẩu",
            img: './assets/img/products/lau-thai-tomyum.jpeg',
            price: 699000,
            desc: 'Lẩu Thái là món ăn xuất phát từ món canh chua Tom yum nổi tiếng của Thái Lan. Nước lẩu có hương vị chua chua cay cay đặc trưng. Các món nhúng lẩu gồn thịt bò, hải sản, rau xanh và các loại nấm.',
        },
        {
            id: 43,
            status: 1, 
            title: 'Set lẩu Thái nấm chay',
            category: "Món lẩu",
            img: './assets/img/products/lau-thai-nam-chay.png',
            price: 550000,
            desc: 'Một set lẩu Thái nấm chay với nước dùng 100% từ rau củ quả tự nhiên, thêm sả cây tươi, riềng miếng, ớt, nước dừa để lên được vị nước lẩu Thái chuẩn vị. Đồ nhúng đa dạng với nhiều loại nấm khác nhau, rau tươi giòn, đậu phụ mềm xốp, váng đậu amla chiên giòn. Kèm bún tươi ăn rất hợp.',
        },
        {
            id: 44,
            status: 1, 
            title: 'Đậu hũ xào nấm chay',
            category: "Món chay",
            img: './assets/img/products/dau-hu-xao-nam-chay.png',
            price: 220000,
            desc: 'Món xào thanh nhẹ ngọt lịm từ rau củ và nấm tươi, thêm chút đậu phụ chiên thái miếng, nêm nếm đậm đà. Ăn kèm cơm trắng hay làm bún trộn rau củ cũng rất hợp.',
        },
        {
            id: 45,
            status: 1, 
            title: 'Bún trộn chay (1 suất)',
            category: "Món chay",
            img: './assets/img/products/bun-tron-chay.png',
            price: 75000,
            desc: 'Bún trộn chay tưởng là quen mà ăn ngon lạ miệng. Với bún tươi được trộn với nước tương và sốt ớt đặc biệt, mắm chay thơm, thêm rau củ tươi, rau thơm bắt vị, nấm xào săn, đậu phụ thái lát, một món thanh nhẹ thích hợp ăn trưa hoặc để dành cho anh chị eat-clean bữa tối.',
        },
        {
            id: 46,
            status: 1, 
            title: 'Bún riêu chay (1 suất)',
            category: "Món chay",
            img: './assets/img/products/bun-rieu-chay.png',
            price: 75000,
            desc: 'Bún riêu chay với phần gạch cua chay từ đậu phụ non mềm đánh với sốt màu thơm ngon. Nước dùng thanh nhẹ từ rau củ quả, được nấu lên vị đậm đà rất ngon miệng. Một phần bún riêu kèm với gạch cua là giò chay, đậu phụ rán, rau sống ngọt giòn và tương ớt chay sánh ngon.',
        },
        {
            id: 47,
            status: 1, 
            title: 'Miến xào rau củ chay',
            category: "Món chay",
            img: './assets/img/products/mien-xao-rau-cu-chay.png',
            price: 170000,
            desc: 'Sợi miến khoai lang bếp ngâm cho mềm, xào kèm rau củ quả tươi theo mùa, nêm cùng nước tương và dầu mè, một món xào chay vừa mát lành lại thơm ngon.',
        },
        {
            id: 48,
            status: 1, 
            title: 'Cuốn nấm chay (10 cuốn)',
            category: "Món chay",
            img: './assets/img/products/cuon-nam-chay.png',
            price: 120000,
            desc: 'Nấm tươi làm chín cuộn với bánh phở và rau bào, thêm đậu phụ chiên giòn thái chân hương đưa vị, chấm mắm chua ngọt chay bếp trưởng pha chế, một món ngon làm món khai vị rất hợp.',
        },
        {
            id: 49,
            status: 1, 
            title: 'Xôi xéo',
            category: "Món chay",
            img: './assets/img/products/xoi-xeo.png',
            price: 80000,
            desc: 'Xôi xéo đậu xanh bếp dùng nếp cái hoa vàng hạt mẩy, ngâm với nước nghệ và đồ 2 lần cho hạt nếp chín mềm và thơm, đậu xanh sên mịn cắt tơi trộn cùng xôi, khi ăn rắc hành phi đưa vị, rất hấp dẫn.',
        },
        {
            id: 50,
            status: 1, 
            title: 'Chả quế chay',
            category: "Món chay",
            img: './assets/img/products/cha-que-chay.png',
            price: 70000,
            desc: '',
        },
        {
            id: 51,
            status: 1, 
            title: 'Nem chay',
            category: "Món chay",
            img: './assets/img/products/nem-chay.png',
            price: 160000,
            desc: 'Nem chay thơm ngon, thanh thuần bếp trưởng sử dụng rau củ bào tươi, đậu xanh, khoai môn, miến, mộc nhĩ và nấm hương, tất cả xào thơm cho lên vị, sau đó cuộn với bánh đa nem mỏng, chiên giòn vỏ, chấm mắm chua ngọt chay ăn kèm rau thơm rất hấp dẫn.',
        },
        {
            id: 52,
            status: 1, 
            title: 'Bánh tráng trộn',
            category: "Món ăn vặt",
            img: './assets/img/products/banh-trang-tron.jpg',
            price: 20000,
            desc: 'Bánh tráng trộn là món ăn ngon không chỉ nổi danh đất Sài Thành mà ngay khi xuất hiện tại Hà Nội, nó cũng đã trở thành món ăn “hot trend” rất được giới trẻ yêu thích. ',
        },
        {
            id: 53,
            status: 1, 
            title: 'Bánh tráng nướng',
            category: "Món ăn vặt",
            img: './assets/img/products/banh-trang-nuong.jpg',
            price: 10000,
            desc: 'Khác với món bánh tráng trộn, bánh tráng nướng được phết một lớp trứng chút lên bề mặt bánh tráng cùng thịt băm, mỡ hành, nướng đến khi có màu vàng ruộm. ',
        },
        {
            id: 54,
            status: 1, 
            title: 'Ốc thập cẩm (1 suất)',
            category: "Món ăn vặt",
            img: './assets/img/products/oc-thap-cam.jpg',
            price: 50000,
            desc: 'Được chế biến đủ các món ốc ngon khác nhau, như: ốc hấp, ốc luộc, ốc xào, ốc bỏ lò,.. với đủ các gia vị như tỏi, hành, ớt, tiêu, rau răm,…',
        },
        {
            id: 55,
            status: 1, 
            title: 'Cơm cháy chà bông',
            category: "Món ăn vặt",
            img: './assets/img/products/com-chay-cha-bong.jpg',
            price: 60000,
            desc: 'Cơm cháy chà bông có thể bảo quản cả tháng mà ăn vẫn ngon và đóng gói rất tiện.',
        },
        {
            id: 56,
            status: 1, 
            title: 'Phá lấu (1 suất)',
            category: "Món ăn vặt",
            img: './assets/img/products/pha-lau.jpg',
            price: 99000,
            desc: 'Cứ mỗi lần hỏi “Ăn gì ở Sài Gòn ngon, rẻ ?” là người ta nhớ ngay món phá lấu.',
        },
        {
            id: 57,
            status: 1, 
            title: 'Bột chiên (1 suất)',
            category: "Món ăn vặt",
            img: './assets/img/products/bot-chien.jpg',
            price: 49000,
            desc: 'Cùng với nước chấm đặc biệt, bột chiên để lại hương vị khó tả cho thực khách sau khi thưởng thức.',
        },
        {
            id: 58,
            status: 1, 
            title: 'Gỏi khô bò (1 suất)',
            category: "Món ăn vặt",
            img: './assets/img/products/goi-bo-kho.jpg',
            price: 60000,
            desc: 'Thơm ngon đến từng sợi bò.',
        },
        {
            id: 59,
            status: 1, 
            title: 'Hoành thánh tôm (10 viên)',
            img: './assets/img/products/hoanh_thanh.jpg',
            category: 'Món mặn',
            price: 130000,
            desc: 'Những miếng há cảo, sủi cảo, hoành thánh với phần nhân tôm, sò điệp, hải sản tươi ngon hay nhân thịt heo thơm ngậy chắc chắn sẽ khiến bất kỳ ai thưởng thức đều cảm thấy rất ngon miệng.'
        },
        {
            id: 60,
            status: 1, 
            title: 'Nước ép dâu tây',
            img: './assets/img/products/nuoc-ep-dau-tay.jpg',
            category: 'Nước uống',
            price: 100000,
            desc: 'Dâu tây ăn nguyên quả ngon ngọt, có cả quả dôn dốt chua, màu đỏ mọng trông cực yêu. Không chỉ ngon miệng mà đồ uống từ dâu tây còn có công dụng bảo vệ sức khỏe, sáng mắt, đẹp da, thon gọn vóc dáng. Làm giảm nguy cơ mắc bệnh về mỡ máu, chống viêm,…'
        },
        ]
        localStorage.setItem('products', JSON.stringify(products));
    }
}

// Create admin account 
function createAdminAccount() {
    localStorage.removeItem('accounts');
    let accounts = localStorage.getItem("accounts");
    if (!accounts) {
        accounts = [];
        accounts.push({
            fullname: "Công Lý | Administrator",
            phone: "n21dcvt064",
            password: "1234567",
            address: 'PTIT HCM',
            email: 'conglytran0301@gmail.com',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        accounts.push({
            fullname: "Trọng Hiếu | Administrator",
            phone: "n21dcvt032",
            password: "1234567",
            address: 'PTIT HCM',
            email: '',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        accounts.push({
            fullname: "Hồng Anh | Administrator",
            phone: "n21dcvt001",
            password: "1234567",
            address: 'PTIT HCM',
            email: '',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        accounts.push({
            fullname: "Hoàng Quy | Administrator",
            phone: "n21dcvt084",
            password: "1234567",
            address: 'PTIT HCM',
            email: '',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        localStorage.setItem('accounts', JSON.stringify(accounts));
    }
}

window.onload = createProduct();
window.onload = createAdminAccount();