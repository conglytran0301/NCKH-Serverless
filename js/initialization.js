//Khoi tao danh sach san pham
function createProduct() {
    /*localStorage.removeItem('products');*/
    if (localStorage.getItem('products') == null) {
        let products = [{
            id: 1,
            status: 1, 
            title: 'Góc Nhỏ Có Nắng',
            img: './assets/img/products/goc-nho-co-nang.png',
            category: 'Văn học',
            price: 68000,
            desc: '"Góc Nhỏ Có Nắng" là cuốn sách tô màu với 30 chủ đề đa dạng, giúp thư giãn và chữa lành tâm hồn qua những bức tranh đẹp mắt và đơn giản. Khám phá sự sáng tạo của riêng bạn với màu sắc tùy ý trên chất liệu giấy dày, mịn, mang lại trải nghiệm tô màu thú vị.'
        },
        {
            id: 2,
            status: 1, 
            title: 'Tô Bình Yên Vẽ Hạnh Phúc',
            img: './assets/img/products/to-binh-yen-ve-hanh-phuc.png',
            category: 'Văn học',
            price: 88000,
            desc: 'Rau củ quả theo mùa tươi mới xào với nước mắm chay, gia vị để giữ được hương vị ngọt tươi nguyên thủy của rau củ, một món nhiều vitamin và chất khoáng, rất dễ ăn.'
        },
        {
            id: 3,
            status: 1, 
            title: 'Nhà Giả Kim',
            img: './assets/img/products/nha-gia-kim.png',
            category: 'Văn học',
            price: 79000,
            desc: '"Nhà Giả Kim" của Paulo Coelho kể về hành trình của Santiago, chàng chăn cừu tìm kiếm kho báu theo giấc mơ tại Kim Tự Tháp Ai Cập. Qua chuyến phiêu lưu, cậu thấu hiểu ý nghĩa hạnh phúc, sự hòa hợp với vũ trụ và con người. Với triết lý phương Đông sâu sắc, cuốn sách đã vượt biên giới và làm rung động hàng triệu độc giả, trở thành tác phẩm bán chạy và có sức ảnh hưởng lớn trên toàn thế giới.'
        },
        {
            id: 4,
            status: 1, title: '999 Lá Thư Gửi Cho Chính Mình',
            img: './assets/img/products/999-la-thu-gui-cho-chinh-minh.png',
            category: 'Văn học',
            price: 99000,
            desc: '"999 Lá Thư Gửi Cho Chính Mình - Tô Màu Cuộc Sống" là cuốn sách kết hợp giữa những lá thư đầy ý nghĩa và tranh tô màu sinh động, giúp bạn tìm lại niềm vui từ những điều nhỏ bé quanh mình. Qua việc tô màu, cuốn sách hướng đến chữa lành và mang lại hạnh phúc cho tâm hồn, giúp cuộc sống trở nên rực rỡ và lấp đầy năng lượng tích cực.'
        },
        {
            id: 5,
            status: 1, 
            title: 'Lén Nhặt Chuyện Đời',
            img: './assets/img/products/len-nhat-chuyen-doi.png',
            category: 'Văn học',
            price: 85000,
            desc: '"Lén Nhặt Chuyện Đời" là cuốn sách tập hợp những câu chuyện giản dị, đời thường, giống như những viên charm lấp lánh trên chiếc vòng Pandora, mỗi viên đại diện cho một kỷ niệm. Tác giả lặng lẽ thu nhặt những mẩu chuyện về tình yêu, gia đình, người trẻ và cuộc sống, rồi kết thành quyển sách. Đây là hành trình tự sự, không giảng giải, mà chỉ mong bạn đọc tìm được điều gì đó phù hợp với bản thân mình.'
        },

        {
            id: 6,
            status: 1, 
            title: 'Trường Ca Achilles',
            img: './assets/img/products/truong-ca-achilles.png',
            category: 'Văn học',
            price: 156000,
            desc: '"Trường Ca Achilles" kể về tình bạn và tình yêu sâu sắc giữa Patroclus và Achilles, từ khi còn là hai cậu bé cho đến khi trưởng thành, cùng tham gia cuộc chiến thành Troy. Dựa trên sử thi Iliad, tác giả Madeline Miller tái hiện lại cuộc chiến vĩ đại với những xung đột cảm xúc và sự hy sinh. Cuốn sách đã đoạt giải Orange 2012 và nằm trong top bán chạy của New York Times.'
        },

        {
            id: 7,
            status: 1, 
            title: 'Trốn Lên Mái Nhà Để Khóc',
            category: 'Văn học',
            img: './assets/img/products/tron-len-mai-nha-de-khoc.png',
            price: 95000,
            desc: '"Trốn Lên Mái Nhà Để Khóc" của Lam là một cuốn sách tản văn gợi lên những hoài niệm về gia đình, tuổi thơ và những cảm xúc bình yên từ quá khứ. Những mẩu chuyện đong đầy tình yêu thương của mẹ, bà, và những kỷ niệm tuổi thơ, giúp độc giả tìm thấy sự bình yên giữa cuộc sống bộn bề. Cuốn sách là một mái nhà tinh thần, nơi người đọc có thể trốn vào để thả lỏng cảm xúc, hồi tưởng, và lấy lại sức mạnh tiếp tục cuộc hành trình trưởng thành.'
        },

        {
            id: 8,
            status: 1, 
            title: 'Tết Ở Làng Địa Ngục',
            img: './assets/img/products/tet-o-lang-dia-nguc.jpg',
            category: 'Văn học',
            price: 169000,
            desc: '"Tết Ở Làng Địa Ngục" của Thảo Trang là một tác phẩm kinh dị Việt Nam lấy bối cảnh một ngôi làng xa xôi, nơi người dân sống trong sợ hãi về quá khứ tội lỗi. Vào đêm cuối năm, ông Thập nhận điềm báo từ một âm hồn mặc quan phục đỏ, báo hiệu tai ương sắp đến. Ngôi làng, vốn là hậu duệ của băng cướp Truông Nhà Hồ, đối diện với thế lực siêu nhiên và bi kịch trong dịp Tết. Câu chuyện đậm chất huyền bí và rùng rợn, để lại dư âm khó phai khi gấp sách lại.'
        },

        {
            id: 9,
            status: 1, 
            title: 'Hoàng Tử Bé (Tái Bản)',
            category: "Thiếu nhi",
            img: './assets/img/products/hoang-tu-be.png',
            price: 60000,
            desc: '"Hoàng tử bé" là tác phẩm nổi tiếng nhất của Antoine de Saint-Exupéry, được viết trong thời gian ông sống lưu vong tại New York và xuất bản lần đầu tiên tại đó vào năm 1943. Từ đó, "Hoàng tử bé" đã trở thành một trong những cuốn sách được đọc và yêu thích nhất trên toàn thế giới, với hơn 200 triệu bản in và dịch ra 250 ngôn ngữ khác nhau. Tại Việt Nam, cuốn sách được dịch lần đầu vào năm 1966 và từ đó đã có nhiều bản dịch khác nhau. Phiên bản mới nhất này, được xuất bản nhân dịp kỷ niệm 70 năm ra đời của tác phẩm, là bản dịch đầu tiên tại Việt Nam có bản quyền chính thức từ nhà xuất bản Gallimard. "Hoàng tử bé" là một câu chuyện đơn giản nhưng chứa đựng triết lý sâu sắc về cuộc sống, tình yêu, và sự cô đơn.',
        },
        {
            id: 10,
            status: 1, 
            title: 'Những Truyện Hay Cho Thiếu Nhi',
            category: "Thiếu nhi",
            img: './assets/img/products/nhung-truyen-hay-viet-cho-thieu-nhi.png',
            price: 60000,
            desc: 'Tập truyện tuyển chọn những truyện hay viết cho thiếu nhi của nhà văn Tô Hoài: Đám cưới chuột, Võ sĩ Bọ Ngựa, Dê và Lợn, Hai con ngỗng, Bàn Quý và Ngựa Con, Mùa xuân đã về đấy… “Bạn đọc nhỏ tuổi hay người lớn đọc đồng thoại? Những tác phẩm viết cho lứa tuổi thơ nổi tiếng trong nước và thế giới đã trả lời câu hỏi ấy. Một sáng tác hay cho các em cũng làm cho cả người lớn thấy hay. Các em và người lớn đều thu nhận được ở tác phẩm ấy những thông cảm cho mỗi lứa tuổi khác nhau, mà người lớn không cần phải giả làm trẻ em mới hiểu được. Người lớn vốn đã thích thú đọc rất hào hứng những tác phẩm tưởng tượng còn “hoang đường” hơn truyện đồng thoại kia mà.” - Nhà văn Tô Hoài -',
        },
        {
            id: 11,
            status: 1, 
            title: 'Muôn Kiếp Nhân Sinh',
            category: 'Tiểu thuyết',
            img: './assets/img/products/muon-kiep-nhan-sinh.png',
            price: 160000,
            desc: '"Muôn Kiếp Nhân Sinh" của Giáo sư John Vũ – Nguyên Phong, là cuốn sách khám phá về luật Nhân quả và Luân hồi thông qua những câu chuyện tiền kiếp của ông Thomas, một nhà tài chính nổi tiếng ở New York. Tác phẩm vẽ nên một bức tranh về nhiều kiếp sống từ nền văn minh Atlantis, Ai Cập cổ đại đến Hoa Kỳ ngày nay, mang đến tri thức mới về vũ trụ và nhân sinh. John Vũ, với bút danh Nguyên Phong, là một nhà khoa học và tác giả nổi tiếng với nhiều tác phẩm văn hóa tâm linh như "Hành trình về Phương Đông".'
        },
        {
            id: 12,
            status: 1, 
            title: 'Nhật Ký Trong Tù (Tái Bản)',
            img: './assets/img/products/nhat-ki-trong-tu.png',
            category: 'Văn học',
            price: 80000,
            desc: 'Giáo sư Phương Lựu từ NXB Văn Học nhận xét rằng "Nhật ký trong tù" của Bác Hồ, dù viết bằng chữ Hán, khác biệt với thơ Đường truyền thống. Thơ của Bác không sử dụng ngôn từ cổ điển mà có sự kết hợp giữa từ vựng cổ và bạch thoại. Bác không tuân theo các quy tắc đối thanh, đối ý của thơ Đường mà tập trung vào thể loại tứ tuyệt tự sự, với mục đích ghi nhật ký và kể chuyện. Điều này thể hiện sự sáng tạo độc đáo của Bác trong việc tạo ra thể thơ tứ tuyệt tự sự, khác biệt với thơ Đường luật thường trữ tình hoặc tả cảnh. Thơ của Bác, mặc dù chứa đựng nhiều chi tiết đời thường, phản ánh một tâm hồn đồng cảm và nhân cách lớn, cùng khát vọng tự do.'
        },
        {
            id: 13,
            status: 1, 
            title: 'Người Đàn Ông Mang Tên OVE',
            img: './assets/img/products/nguoi-dan-ong-mang-ten-ove.png',
            category: 'Văn học',
            price: 160000,
            desc: 'Người đàn ông mang tên Ove, 59 tuổi, là kiểu người cứng nhắc, nguyên tắc và hay chỉ trích những người xung quanh. Ông lên kế hoạch tự tử nhưng liên tục bị làm phiền bởi những sự cố không mong muốn, từ cặp đôi trẻ tuổi đến con mèo hoang. Những tình huống này dần thay đổi cuộc sống của ông. Cuốn sách, với sự kết hợp giữa trào lộng Bắc Âu và nhân văn sâu sắc, đã bán gần 3 triệu bản và được dịch sang 40 ngôn ngữ. Bộ phim chuyển thể từ sách cũng được đề cử Oscar 2017.'
        },
        {
            id: 14,
            status: 1, 
            title: 'Nếu Biết Trăm Năm Là Hữu Hạn',
            img: './assets/img/products/neu-biet-tram-nam-la-huu-han.png',
            category: 'Văn học',
            price: 159000,
            desc: 'Nếu Biết Trăm Năm Là Hữu Hạn là cuốn tản văn nổi tiếng của Phạm Lữ Ân, một bút danh chung của hai tác giả Đặng Nguyễn Đông Vy và Phạm Công Luận. Tác phẩm này gồm những bài viết suy ngẫm về cuộc sống, tình yêu, gia đình và tuổi trẻ, nhắc nhở chúng ta về sự hữu hạn của thời gian. Với văn phong tinh tế và sâu lắng, cuốn sách khuyến khích người đọc trân trọng từng khoảnh khắc và sống hết mình cho những gì thực sự quan trọng trong cuộc đời.'
        },
        {
            id: 15,
            status: 1, 
            title: 'Cây Cam Ngọt Của Tôi',
            img: './assets/img/products/cay-cam-ngot-cua-toi.png',
            category: 'Văn học',
            price: 108000,
            desc: 'Cây cam ngọt của tôi là một tác phẩm kinh điển của văn học Brazil, kể về Zezé, cậu bé tinh nghịch với ước mơ trở thành nhà thơ. Sống trong cảnh nghèo khó, Zezé tìm niềm vui và an ủi bên cây cam ngọt cùng những người bạn đặc biệt. Cuốn sách lôi cuốn người đọc vào hành trình cảm xúc sâu lắng, qua đó nhận ra giá trị của yêu thương và lòng trắc ẩn trong cuộc sống.'
        },
        {
            id: 16,
            status: 1, 
            title: 'Capybara Funny Time',
            img: './assets/img/products/capibara-funny-time.png',
            category: 'Văn học',
            price: 86000,
            desc: 'Capybara Funny Time - Thời Gian Vui Vẻ là một cuốn sách tô màu đáng yêu, chứa đầy những hình ảnh tinh tế về Capybaras, loài động vật hiền lành và dễ mến. Mỗi trang sách được thiết kế tỉ mỉ, mang lại không gian yên bình và dịu dàng, giúp người đọc thư giãn và tìm thấy niềm vui qua việc tô màu. Phù hợp cho mọi lứa tuổi, cuốn sách này không chỉ là một hoạt động giải trí mà còn là một trải nghiệm chữa lành, lan tỏa tình yêu thương và sự an lạc trong cuộc sống.'
        },
        {
            id: 17,
            status: 1, 
            title: 'Vụ Mất Tích Thành Hamelin',
            img: './assets/img/products/vu-mat-tich-thanh-hamelin.png',
            category: 'Văn học',
            price: 229000,
            desc: 'Vụ mất tích thành Hamelin là một tuyển tập trinh thám gồm ba truyện ngắn đầy hấp dẫn của Chan Ho-Kei: "Jack và cây đậu thần", "Mật thất của Râu Xanh", và "Vụ án cây sáo thần bắt cóc trẻ em ở Hamelin". Trong các truyện này, quý tộc thông minh Lyle Hoffman cùng hầu cận Hans Green khám phá bí ẩn trong những câu chuyện cổ tích quen thuộc. Với tài năng trinh thám của mình, Chan Ho-Kei đưa người đọc vào những cuộc điều tra ly kỳ, mang đến góc nhìn mới mẻ và sâu sắc về các nhân vật cổ tích.'
        },
        {
            id: 18,
            status: 1, 
            title: 'Thư Tình Hoàng Tử Bé',
            img: './assets/img/products/thu-tinh-hoang-tu-be.png',
            category: 'Văn học',
            price: 105000,
            desc: 'Thư Tình Hoàng Tử Bé là cuốn sách tập hợp những bức thư giữa Antoine de Saint-Exupéry và vợ ông, Consuelo, trong thời gian họ phải xa nhau do chiến tranh. Những bức thư này không chỉ tiết lộ cuộc sống và con người thực của tác giả Hoàng Tử Bé mà còn làm sáng tỏ tình yêu sâu đậm giữa hai người, một nguồn cảm hứng quan trọng trong quá trình sáng tạo tác phẩm. Consuelo, người đã đồng hành với Antoine suốt hành trình viết nên Hoàng Tử Bé, mong muốn độc giả hiểu rằng câu chuyện này không chỉ dành cho trẻ em mà còn là một tác phẩm mang tính tiểu sử và di chúc của nhà văn.'
        },
        {
            id: 19,
            status: 1, 
            title: 'Mặt Trăng Và Đồng Sáu Xu',
            img: './assets/img/products/mat-trang-va-dong-xu.png',
            category: 'Văn học',
            price: 149000,
            desc: 'Mặt Trăng Và Đồng Sáu Xu là tiểu thuyết nổi tiếng của William Somerset Maugham, lấy cảm hứng từ cuộc đời danh họa Paul Gauguin. Tác phẩm kể về Charles Strickland, một người đàn ông từ bỏ mọi thứ – gia đình, sự nghiệp, và địa vị – để theo đuổi đam mê hội họa. Strickland là hiện thân của một nghệ sĩ cực đoan, sẵn sàng hy sinh tất cả vì nghệ thuật, coi thường mọi giá trị khác như đồng sáu xu vô giá trị. Maugham khắc họa nhân vật đầy mâu thuẫn: ích kỷ, khắc nghiệt, nhưng đồng thời là một nghệ sĩ cô đơn, đắm chìm trong tình yêu mãnh liệt với nghệ thuật chân chính. Tác phẩm là cuộc hành trình khám phá sâu sắc về sự đối lập giữa nghệ thuật và đời sống, về cái giá phải trả để đạt đến đỉnh cao sáng tạo.'
        },
        {
            id: 20,
            status: 1, 
            title: 'Hành Lang Hai Lớp',
            img: './assets/img/products/hanh-lang-hai-lop-hoa-co.png',
            category: 'Văn học',
            price: 209000,
            desc: 'Giới thiệu tác giả: Hoa Cỏ là một bạn trẻ yêu mèo, thích ngắm mây trời và mơ ước về một cuộc sống bình yên, nơi có thể trồng hoa, nằm dài trên cỏ, và làm những điều khiến cuộc sống trở nên đáng yêu hơn. Giới thiệu tác phẩm: Hành Lang Hai Lớp là một hành trình khám phá những tâm hồn trẻ trung, nơi các nhân vật dần nhận ra rằng, dù cuộc sống học đường tưởng như vô tư, nhưng ẩn sau tiếng cười và những trò đùa là vô số tâm sự khó nói. Tác phẩm là câu chuyện về tình bạn, đôi khi nghịch ngợm, đôi khi hờn dỗi, nhưng luôn chân thành. Hoa Cỏ gửi gắm đến bạn đọc trẻ những lời an ủi và đồng cảm, như một cái ôm ấm áp dành cho những ai đang tìm kiếm sự bình yên trong cuộc sống.'
        },
        {
            id: 21,
            status: 1, 
            title: 'Dưới Khung Trời Ngát Xanh',
            category: 'Văn học',
            img: './assets/img/products/duoi-khung-troi-ngat-xanh.png',
            price: 88000,
            desc: 'Dưới khung trời ngát xanh, cuộc sống của đám trẻ xóm Đồi ở làng Ghe hiện lên đầy màu sắc, được bao bọc bởi núi sông. Dù nghèo khó và thiếu thốn, tuổi thơ của chúng vẫn tràn ngập tình yêu thương và sự tự lập. Những trò chơi như đổ lỗ dế, dựng lều cỏ hay những trò nghịch dại như trêu tổ ong vàng đều mang lại niềm vui đơn sơ. Qua những câu chuyện về tuổi thơ riêng, tác giả Lữ Mai đã chạm đến ký ức chung của nhiều người cùng thế hệ, khiến ai cũng có thể thấy mình trong đó.'
        },
        {
            id: 22,
            status: 1, 
            title: 'Bên Kia Sợ Hãi',
            category: 'Văn học',
            img: './assets/img/products/ben-kia-so-hai.png',
            price: 240000,
            desc: '“Bên Kia Sợ Hãi” là hành trình khám phá tâm thức và triết lý của nền văn minh Toltec, được truyền tải qua lời dạy của Don Miguel Ruiz. Cuốn sách mở ra một bức tranh sống động về văn hóa Toltec, giới thiệu con đường tâm linh của Miguel Ruiz từ bác sĩ đến bậc thầy nagual. Sách tập trung vào việc vượt qua nỗi sợ hãi thông qua các nguyên tắc tinh thần như không phán xét, không giả định. Đồng thời, nó cung cấp công cụ thực hành chuyển hóa, giúp người đọc đạt được sự tự do và bình an trong cuộc sống.'
        },

        {
            id: 23,
            status: 1, 
            title: 'Anders Sát Thủ Cùng Bè Lũ',
            category: 'Văn học',
            img: './assets/img/products/ander-sat-thu-cung-be-lu.png',
            price: 135000,
            desc: '"Anders Sát Thủ Cùng Bè Lũ" là một tác phẩm hài hước nhưng sâu cay, chứa đựng thông điệp nhân văn mạnh mẽ. Câu chuyện xoay quanh ba nhân vật bị xã hội đẩy xuống đáy: một nữ mục sư bị bạo hành từ nhỏ, một kẻ lưu manh làm việc tại khách sạn tình yêu, và một tên sát thủ. Bộ ba này, đầy căm thù và bất mãn, sử dụng mọi thủ đoạn để kiếm tiền, từ báng bổ đức tin đến trục lợi từ lòng nhân ái. Mặc dù ban đầu họ kiếm được nhiều tiền, nhưng cuối cùng số tiền đó cũng tan biến. Đến một ngày, họ quyết định hòa giải với cuộc đời và con người, mở ra một hành trình mới.'
        },

        {
            id: 24,
            status: 1, 
            title: 'Hiếu-Thở Cho Ba, Mỉm-Cười Cho Má',
            img: './assets/img/products/hieu-tho-cho-ba-mim-cuoi-cho-ma.png',
            category: 'Văn học',
            price: 125000,
            desc: 'Chứa đựng những phương pháp có thể thực hành cùng nhau, để hóa giải những khổ đau cũ, để có thể “vượt thắng giận hờn”. Cơ hội để thực hành biết ơn sự có mặt của cha mẹ trong cuộc đời, để thành thật với cảm xúc của bản thân. Thiền sư Thích Nhất Hạnh là một trong những nhân vật có thể đưa đạo vào đời một cách rất chân thực, rất gần gũi thông qua các buổi chia sẻ, pháp thoại, pháp đàm,… Với lối dùng ngôn từ mộc mạc, giản dị, nhưng những giáo lý được gửi gắm trong bản thảo lại sâu sắc và đáng suy ngẫm vô cùng!'
        },
        {
            id: 25,
            status: 1, 
            title: 'Tục Ngữ Ca Dao Dân Ca Việt Nam',
            img: './assets/img/products/tuc-ngu-ca-dao-dan-ca-viet-nam.jpg',
            category: 'Văn học',
            price: 195000,
            desc: 'Tác phẩm của nhà nghiên cứu văn học Vũ Ngọc Phan được trao tặng Giải thưởng Hồ Chí Minh đợt đầu tiên (năm 1996, lĩnh vực văn nghệ dân gian).Cuốn sách được tác giả dày công sưu tầm, khảo cứu trong suốt những năm tham gia kháng chiến chống Pháp, đặc biệt từ khi chuyển sang làm công tác nghiên cứu văn - sử - địa và hoàn thành vào năm 1956. Vũ Ngọc Phan đã có phần nghiên cứu tâm huyết về đặc điểm, giá trị đặc sắc của tục ngữ, ca dao, dân ca vô cùng đa dạng và phong phú của dân tộc Việt Nam ta (trong đó có cả của một số dân tộc thiểu số) bên cạnh phần tuyển chọn công phu.'
        },

        {
            id: 26,
            status: 1, 
            title: 'Thơ Xuân Quỳnh (Tái Bản 2024)',
            category: 'Văn học',
            img: './assets/img/products/tho-xuan-quynh-tai-ban-2024.jpg',
            price: 42000,
            desc: 'Xuân Quỳnh đã để lại dấu ấn đậm nét trong dòng thơ tình Việt Nam. Thơ của cô là tiếng lòng của một tâm hồn phụ nữ thấm đẫm tình cảm. Cô dành nhiều tâm huyết cho đề tài tình yêu và là một trong những người viết thơ tình hay nhất ở thời đại chúng ta.Tuyển tập Thơ Xuân Quỳnh giới thiệu tới bạn đọc những bài thơ tình giàu cảm xúc, nồng nàn và dữ dội như Thơ viết cho mình và những người con gái khác, Sóng hay những bài thơ dung dị viết tặng các con trai yêu quý của cô như Chùm thơ xuân cho ba con nhỏ (tặng Tuấn Anh, tặng Minh Vũ, tặng Quỳnh Thơ). Tất cả nhờ tình yêu thương, thấm đẫm nữ tính ấy mà bất chấp mọi khổ đau, buồn phiền của một duyên phận nhiều lận đận, Xuân Quỳnh để lại trong thơ niềm tin vững chắc về sự hiện diện của hạnh phúc có thật giữa trần gian này.'
        },

        {
            id: 27,
            status: 1, 
            title: 'Thơ Tố Hữu (Tái Bản 2024)',
            category: 'Văn học',
            img: './assets/img/products/tho-to-huu-tai-ban-2024.jpg',
            price: 55000,
            desc: '"Tố Hữu là một nhà thơ lớn. nói đúng hơn, ông là nhà thơ lãng mạn cách mạng. Cả cuộc đời ông gắn bó với cách mạng. Thơ với đời là một. Trước sau đều nhất quán. Tố Hữu nhìn cách mạng bằng con mắt lãng mạn của một thi sĩ. Thơ ông dường như chỉ có một giọng. Đó là gióng hát từng bừng ca ngợi cách mạng. Đọc thơ ông trong bất cứ hoàn cảnh và tâm trạng nào. Ta cũng thấy phấn chấn, náo nức như đi trẩy hội. Đến đâu cũng nghe vang tiếng trống, tiếng kèn. Mà thơ ông đâu chỉ có trống phách linh đình như một đám rước, ông còn bắn cả 21 phát đại bác vang trời. Cho đến nay, chỉ có ông là nhà thơ Việt Nam duy nhất đã bắn đại bác trang trọng như thế."'
        },

        {
            id: 28,
            status: 1, 
            title: 'Thơ Xuân Diệu (Tái Bản 2023)',
            category: 'Văn học',
            img: './assets/img/products/tho-xuan-dieu-tai-ban-2023',
            price: 45000,
            desc: 'Trong sự nghiệp sáng tác thơ văn của mình, Xuân Diệu được biết đến như là một nhà thơ lãng mạn trữ tình, “Nhà thơ mới nhất trong các nhà thơ mới” (Hoài Thanh), “Ông hoàng của thơ tình”.Xuân Diệu là thành viên của Tự Lực Văn Đoàn và cũng đã là một trong những chủ soái của phong trào “Thơ Mới”. Tác phẩm tiêu biểu của ông ở giai đoạn này: Thơ Thơ (1938), Gửi hương cho gió (1945), truyện ngắn Phấn thông vàng (1939), Trường ca (1945).Xuân Diệu tham gia ban chấp hành, nhiều năm là ủy viên thường vụ Hội Nhà văn Việt Nam. Từ đó, Xuân Diệu trở thành một trong những nhà thơ hàng đầu ca ngợi Cách mạng, một “dòng thơ công dân”. Bút pháp của ông chuyển biến phong phú về giọng vẻ: có giọng trầm hùng, tráng ca, có giọng chính luận, giọng thơ tự sự trữ tình. Tiêu biểu là: Ngọn quốc kỳ (1945), Một khối hồng (1964), Thanh ca (1982), Tuyển tập Xuân Diệu (1983).'
        },

        {
            id: 29,
            status: 1, 
            title: 'Vòng Lặp',
            category: 'Văn học',
            img: './assets/img/products/vong-lap',
            price: 109000,
            desc: 'Bạn đã bao giờ tự hỏi: Sẽ ra sao nếu lịch sử không chỉ là một dòng chảy tuyến tính, mà là một vòng lặp nơi quá khứ và hiện tại giao thoa?Lý - một nhà văn sống ở thời hiện đại bỗng nhiên gặp phải hàng loạt sự kiện kỳ lạ. Khởi đầu bằng việc cô liên tục gặp những cơn ác mộng bí ẩn, rồi sau đó lại trở thành nhân chứng duy nhất của một vụ tai nạn chết người. Tưởng như câu chuyện khủng khiếp đã kết thúc, nhưng ngày hôm sau, vụ tai nạn lại xảy ra, y hệt như trước đó. Lặp lại, rồi lặp lại.Lý đã rơi vào một vòng lặp thời gian.Trong quá trình tìm cách hóa giải vòng lặp, cô gặp gỡ những danh nhân như Thượng Dương Hoàng hậu, Nguyên phi Ỷ Lan, Thái phó Lý Thường Kiệt, những cái tên vốn tưởng sẽ vĩnh viễn chỉ nằm yên trên những trang sử ố màu đã cùng nhau bước ra khỏi trang sách cũ. Bị cuốn vào vòng lặp thời gian, họ có cơ hội nhìn lại quá khứ, thấu hiểu hơn về nhau và cùng nhau viết nên những trang sử vàng son cho thời kỳ “Bách niên thịnh thế” của Đại Việt.'
        },
        

        {
            id: 30,
            status: 1, 
            title: 'Cây Cam Ngọt Của Tôi',
            category: 'Văn học',
            img: './assets/img/products/cay-cam-ngot.jpg',
            price: 108000,
            desc: '“Vị chua chát của cái nghèo hòa trộn với vị ngọt ngào khi khám phá ra những điều khiến cuộc đời này đáng sống... một tác phẩm kinh điển của Brazil.” - Booklist. “Một cách nhìn cuộc sống gần như hoàn chỉnh từ con mắt trẻ thơ… có sức mạnh sưởi ấm và làm tan nát cõi lòng, dù người đọc ở lứa tuổi nào.” - The National. Hãy làm quen với Zezé, cậu bé tinh nghịch siêu hạng đồng thời cũng đáng yêu bậc nhất, với ước mơ lớn lên trở thành nhà thơ cổ thắt nơ bướm. Chẳng phải ai cũng công nhận khoản “đáng yêu” kia đâu nhé. Bởi vì, ở cái xóm ngoại ô nghèo ấy, nỗi khắc khổ bủa vây đã che mờ mắt người ta trước trái tim thiện lương cùng trí tưởng tượng tuyệt vời của cậu bé con năm tuổi. '
        },

        {
            id: 31,
            status: 1, 
            title: 'Bố Con Cá Gai (Tái Bản 2019)',
            category: 'Văn học',
            img: './assets/img/products/bo-con-ca-gai.jpg',
            price: 96000,
            desc: 'Có những câu chuyện mãi được yêu thương, và nằm trong trái tim bạn đọc suốt năm này qua năm khác… Bố con cá gai là một câu chuyện như thế, trong trái tim độc giả Hàn Quốc, suốt nhiều năm nay. Ở đó có một em nhỏ đã chiến đấu với bệnh hiểm nghèo từ lúc lên ba, giờ em gần mười tuổi. Hãy khoan, đừng vội buồn! Vì em bé này sẽ chẳng làm bạn phải buồn nhiều. Em chịu tiêm rất giỏi, em không khóc, ngoài những lúc mệt quá ngủ thiếp đi, em còn bận đỏ bừng mặt nghĩ tới bạn Eun Mi kẹp-tóc-hoa, bận xếp hình tàu cướp biển, bận lật giở cuốn truyện Bảy viên ngọc rồng… Nhưng bố em thì khác, một ông bố làm em nhỏ của chúng ta phiền lòng quá nhiều, cũng làm những ai dõi theo “bố con cá gai” phải buồn không ít, có khi buồn quá hóa giận! Ông bố ấy đích thị là bố cá gai - một cá bố rất kỳ lạ - cả nguồn sống chỉ co cụm quẩn quanh cá gai con tí xíu. Như một ông bố ngốc!. Ra đời năm 2000, câu chuyện cảm động về ông bố cá gai và cậu bé con mà người bố ấy nâng niu trong Bố con cá gai có sức lay động mạnh mẽ, trở thành một trong những câu chuyện về tình cha được người Hàn Quốc yêu thích nhất.'
        },

        {
            id: 32,
            status: 1, 
            title: 'Người Bạn Phi Thường',
            category: 'Văn học',
            img: './assets/img/products/nguoi-ban-phi-thuong.jpg',
            price: 199000,
            desc: 'Người bạn phi thường, phần mở đầu trong xê ri bốn tập của Elena Ferrante, kể về thời thơ ấu và niên thiếu của Elena và Lila, hai cô bé sống trong một khu phố nghèo thuộc thành phố Napoli, Ý những năm 1950. Lớn lên trên những con phố đầy khắc nghiệt ấy, hai cô gái nhỏ học cách dựa vào nhau để đối mặt với mọi biến cố xảy ra trong cuộc đời của mỗi người. Trên hành trình trưởng thành đầy chông gai này, với nhiều lần chia ly rồi lại đoàn tụ, Elena và Lila vẫn là đôi bạn thân thiết mà số phận của người này phản chiếu lên số phận của người kia. Dưới lăng kính của cô bé Elena, nhà văn Ferrante kể về những biến chuyển của thành phố Napoli tăm tối, của nước Ý trong giai đoạn bùng nổ kinh tế sau Thế chiến, kéo theo vô vàn cảm xúc khác nhau trong mối quan hệ giữa hai cô gái nhỏ.'
        },

        {
            id: 33,
            status: 1, 
            title: 'Việt Nam Danh Tác - Tiêu Sơn Tráng Sĩ',
            category: 'Văn học',
            img: './assets/img/products/tieu-son-trang-si.jpg',
            price: 139000,
            desc: '“TÊN LÍNH ĐỨNG THỞ một hồi nữa rồi mới thuật lại rằng một võ sĩ trông rất mạnh mẽ, dữ tợn, phi ngựa qua cổng phủ và ném xuống đó một cái xác người chết. Phân phủ và phân suất vội vàng theo linh ra cổng Một người trần truồng nằm sấp ở giữa đường, ngay bên cấu treo. Phân suất củi xuống lật ngửa cái thấy lên thì thấy một con dao sáng loáng cắm trúng chỗ trái tim. Thốt nhiên phân phủ thét lớn: - Trời ơi! Nguyễn Kha! Nguyễn Kha bị giết rồi! "'
        },

        {
            id: 34,
            status: 1, 
            title: 'Búp Sen Xanh (Tái Bản 2020)',
            category: 'Văn học',
            img: './assets/img/products/bup-sen-xanh.jpg',
            price: 72000,
            desc: 'Có thể xếp “Búp Sen Xanh” vào nhóm tác phẩm văn học dành cho thiếu nhi và là tác phẩm nổi tiếng nhất viết về chủ tịch Hồ Chí Minh trong suốt thời thơ ấu cho đến khi rời Việt Nam sang Pháp. “Búp Sen Xanh” là nơi tiểu thuyết và lịch sử đã gặp nhau và hoạ nên một giai đoạn trong cuộc đời người Cha già của dân tộc Việt Nam. Nơi ấy, có quê nhà xứ Nghệ, có làng Sen, có khung dệt của mẹ, có lời dạy của cha, có những người bạn và những kỷ niệm ấu thơ. Nơi ấy có xứ Huế mà trong cuộc sống nghèo khổ có trăn trở tuổi trẻ, về con người, về vận mệnh dân tộc, có mất mát và đau thương... “Búp Sen Xanh” vượt ra ngoài những giới hạn của một tác phẩm thiếu nhi, có thể làm bất kỳ ai rung động đến rơi nước mắt trong đêm chia ly, khi người con từ biệt cha ra đi để tìm một con đường cho chính mình và cho dân tộc. Một phần cuộc đời, trọn vẹn lý tưởng và dấn thân... Búp Sen Xanh không chỉ là câu chuyện về lãnh tụ mà còn là câu chuyện để làm người.'
        },

        {
            id: 35,
            status: 1, 
            title: 'Lý Tự Trọng (Tái Bản 2022)',
            category: 'Văn học',
            img: './assets/img/products/ly-tu-trong.jpg',
            price: 50000,
            desc: '“Tôi chưa đến tuổi thành niên, nhưng tôi đủ trí khôn để hiểu rằng con đường của thanh niên chỉ là con đường cách mạng, không thể có con đường nào khác. Tôi tin rằng nếu các ông suy nghĩ kĩ thì các ông cũng thấy cần phải giải phóng dân tộc, giải phóng những người cần lao như tôi.” Đó là câu nói bất hủ của Lý Tự Trọng trước kẻ thù. Lý Tự Trọng đã hi sinh khi tuổi đời còn rất trẻ (1914 - 1931), nhưng dòng máu nhiệt huyết của người Đoàn viên đầu tiên ấy còn chảy mãi trong lòng bao thế hệ tiếp nối… Với mong muốn khơi gợi sự quan tâm và niềm thích thú của độc giả nhỏ tuổi với sách giáo dục truyền thống, câu chuyện về anh hùng Lý Tự Trọng được thể hiện với phần lời kể súc tích, lồng ghép cùng những bức tranh tả thực khổ lớn hoành tráng. '
        },

        {
            id: 36,
            status: 1, 
            title: 'Dế Mèn Phiêu Lưu Ký - Thành Chương Minh Họa',
            category: 'Văn học',
            img: './assets/img/products/de-men-phieu-luu-ky.jpg',
            price: 50000,
            desc: 'Trong hơn nửa thế kỉ, kể từ ngày đầu tiên ra mắt bạn đọc, năm 1941, "Dế Mèn phiêu lưu ký" là một trong những sáng tác tâm đắc nhất của nhà văn Tô Hoài. Tác phẩm đã được tái bản nhiều lần và được dịch ra hơn 20 thứ tiếng trên toàn thế giới và luôn được các thế hệ độc giả nhỏ tuổi đón nhận.'
        },

        {
            id: 37,
            status: 1, 
            title: 'Xóm Bờ Giậu (Tái Bản 2021)',
            category: 'Văn học',
            img: './assets/img/products/xom-bo-giau.jpg',
            price: 145000,
            desc: 'Xóm Bờ Giậu gần gũi thân thuộc, mang trong mình hình bóng của bao làng quê yêu dấu. Đến Xóm Bờ Giậu, bạn sẽ được làm quen với những nhân vật rất thú vị: cụ giáo Cóc thông thái về hưu, nhạc sĩ trứ danh Dế Lửa, chú thợ săn nhiều tâm sự Thằn Lằn, cô người mẫu đáng yêu Ốc Sên, chuyên gia dự báo thời tiết Tắc Kè, vận động viên bận bịu Nhái Xanh, cô nàng điệu đàng Hoa Cúc Áo, thi sĩ nghiệp dư lãng mạn Dế Còm... Nhân vật nào cũng dễ thương. Và nhân vật nào cũng sẵn sàng kể cho bạn nghe một câu chuyện hấp dẫn.'
        },
        {
            id: 38,
            status: 1, 
            title: 'Chuyện Vui Về Chú Ếch Cốm',
            category: 'Văn học',
            img: './assets/img/products/chu-ech-com.jpg',
            price: 44000,
            desc: 'Ếch Cốm không thích đến trường nhưng lại cho rằng mình giỏi nhất trần đời, cái gì cũng biết. Anh bạn Nhái lém lỉnh đã lập mưu trêu chọc cậu bạn lười học, để Ếch Cốm hiểu ra: Thế giới ngoài kia vô cùng rộng lớn, chỉ học hành mới giúp ta mở rộng tầm mắt và thực sự tự tin. “Đối với nhà văn Trần Hoài Dương, văn học thiếu nhi như một lẽ sống của đời người, một ánh sáng trong ngần và thuần khiết hướng ngòi bút của mình vươn tới một cái đẹp lí tưởng.” Nhà văn Lê Phương Liên'
        },
        {
            id: 39,
            status: 1, 
            title: 'Trường Ca Achilles',
            category: 'Tiểu thuyết',
            img: './assets/img/products/truong-ca-achilles.png',
            price: 156000,
            desc: 'Hy Lạp vào thời hoàng kim của các anh hùng. Patroclus là một hoàng tử trẻ vụng về, bị trục xuất tới vương quốc Phthia và được nuôi dạy dưới sự che chở của vua Peleus cùng cậu con trai hoàng kim của ngài, Achilles. “Người Hy Lạp vĩ đại nhất” – mạnh mẽ, đẹp đẽ, và mang nửa dòng máu của một nữ thần – Achilles là tất cả những gì mà Patroclus không bao giờ có được. Nhưng bất chấp sự khác biệt giữa họ, hai cậu bé trở thành chiến hữu trung thành của nhau. Tình cảm giữa họ càng đậm sâu khi cả hai lớn lên thành những chàng trai trẻ, thành thạo trong kĩ nghệ chiến đấu và y dược.'
        },

        {
            id: 40,
            status: 1, 
            title: '25 Độ Âm',
            category: 'Tiểu thuyết',
            img: './assets/img/products/25-do-am.jpg',
            price: 150000,
            desc: 'Di cư và nhập cảnh trái phép luôn là vấn đề nhức nhối của nhân loại trong hàng thập kỉ tồn tại và phát triển. Mặc dù các quốc gia đã đưa ra rất nhiều lời cảnh tỉnh và siết chặt an ninh cùng nhiều hình thức trừng phạt mạnh tay, nhưng vấn nạn này chưa bao giờ được giải quyết triệt để, thậm chí thủ đoạn của bọn tội phạm vượt biên còn ngày càng tinh vi và ngoan cố hơn. Chúng ta hẳn không thể nào quên được sự kiện kinh hoàng, gây rúng động toàn thế giới cách đây 5 năm: 1h20ph sáng ngày 23/10/2019, cảnh sát Anh quốc đã phát hiện ra thi thể của 39 người Việt tử vong trong một chiếc xe container đông lạnh. Họ đều là những con người tham gia vào chuyến hành trình vượt biên trái phép và bỏ mạng ngay trước giây phút tưởng chừng đã đặt chân được đến miền đất hứa.'
        },

        {
            id: 41,
            status: 1, 
            title: 'Lễ Tốt Nghiệp Sinh Tử',
            category: 'Tiểu thuyết',
            img: './assets/img/products/le-tot-nghiep-sinh-tu.jpg',
            price: 209000,
            desc: 'El, Orion và những người bạn khác đã bước sang năm học cuối cùng ở Học viện Ma thuật Scholomance — đây là lúc họ phải đối mặt với viễn cảnh chỉ vài người có thể sống sót trong ngày lễ tốt nghiệp chết chóc của trường. El hạ quyết tâm phải bảo toàn tính mạng cho tất cả thành viên trong nhóm của mình, tuy nhiên mọi chuyện trở nên vô cùng khó khăn khi những cạm bẫy chết người của Scholomace ngày càng gia tăng với ý đồ hạ gục El và nhóm bạn của cô. Cho đến khi El nhận ra rằng, đôi khi, để thắng trận, người ta phải gạt qua tất cả các quy luật của trò chơi. Và đó là lúc cuộc chiến sinh tử ở Scholomance bắt đầu…'
        },
        {
            id: 42,
            status: 1, 
            title: 'Hơi Thở Chữa Lành Thân Tâm',
            category: "Kinh doanh",
            img: './assets/img/products/hoi-tho-chua-lanh-than-tam.jpg',
            price: 159000,
            desc: 'Chúng ta thở từ 17.000 đến 29.000 nhịp mỗi ngày, và con số này là 6 đến 9 triệu nhịp mỗi năm. Dù vậy, phần lớn chúng ta đều thở một cách bản năng, không có chủ đích và chưa chú tâm đúng mực đến hành động này. Có thể bạn chưa biết, nhưng việc thở chưa đúng có thể gây ra những triệu chứng cả về thể chất cũng như tinh thần, từ mệt mỏi, đau đầu, vấn đề về tiêu hóa, rối loạn giấc ngủ cho đến chứng căng thẳng và bất an mãn tính. Richie Bostock sẽ đồng hành cùng bạn trên con đường thay thế những thói quen có hại này bằng một phương pháp thở có kiểm soát, có mục đích, từ đó cải thiện cả sức khỏe thể chất lẫn tinh thần, cũng như nâng cao chất lượng cuộc sống. ',
        },
        {
            id: 43,
            status: 1, 
            title: 'Đầu Tư Từ Đâu?',
            category: "Kinh doanh",
            img: './assets/img/products/dau-tu-tu-dau.jpg',
            price: 175000,
            desc: 'Để đảm bảo năng lực tài chính vững mạnh, bạn không những phải giỏi việc kiếm tiền mà còn cần biết cách làm sao để “tiền đẻ ra tiền”. Và đầu tư là một trong những cách thức giúp bạn đạt được điều đó. ',
        },
        {
            id: 44,
            status: 1, 
            title: 'Dinh Dưỡng Xanh Sống An Lành',
            category: "Khoa học",
            img: './assets/img/products/dinh-duong-song-an-lanh.jpg',
            price: 220000,
            desc: 'Dinh dưỡng xanh, sống an lành dành cho những ai mong muốn bắt kịp xu hướng sống lành mạnh trong bối cảnh hiện đại. Từ chế độ ăn uống xanh sạch đến thực đơn ăn kiêng khoa học, hiểu biết về nhãn thực phẩm đến vitamin, tập thể dục kéo dài đến mẹo vận động nhanh, quản lý thời gian đến chăm sóc bản thân... - cuốn sách này có mọi thứ bạn cần để thiết kế nên một cuộc sống trọn vẹn.',
        },
        {
            id: 45,
            status: 1, 
            title: 'Khoa Học Về Yoga',
            category: "Khoa học",
            img: './assets/img/products/khoa-hoc-ve-yoga.jpg',
            price: 300000,
            desc: 'Lối sống hiện đại khiến con người dễ gặp stress và mắc các chứng bệnh thời công nghệ số như “cổ công nghệ”, “đau vai gáy”, “thoát vị đĩa đệm”… Khoa học đã chứng minh rằng yoga – các tư thế, các bài tập thở và thiền – không những giúp giải tỏa căng thẳng, giảm đau hiệu quả và chữa lành mà còn cải thiện các hệ cơ quan trong cơ thể. Với mong muốn đem đến cho mọi người cái nhìn toàn diện nhất, bao quát nhất về các giá trị thực tiễn của yoga, Khoa học về yoga đào sâu vào khía cạnh sinh lý học của hơn 30 tư thế yoga cốt lõi sau khi giới thiệu khái quát nhưng đầy thông tin về giải phẫu cơ thể. Mỗi tư thế được mô tả cặn kẽ và khoa học, từ mọi góc độ – cơ, xương, khớp – mang lại một hình dung cụ thể về cơ thể giúp các yogi tự tin thực hành và kiểm soát tốt tư thế, tránh gặp phải các chấn thương và tối ưu hóa hiệu quả của thực hành yoga.',
        },
        {
            id: 46,
            status: 1, 
            title: 'Luật Tâm Thức',
            category: "Khoa học",
            img: './assets/img/products/luat-tam-thuc.jpg',
            price: 320000,
            desc: 'Con người, dù là theo phái duy vật hay duy tâm, ăn chay hay ăn mặn, có tìm hiểu tâm linh hay không,... thì điều cuối cùng chúng ta hướng đến vẫn giống nhau - hạnh phúc, viên mãn, không đói khổ. Vậy nên có thể nói cuộc sống là một cuộc truy cầu hạnh phúc. Nhưng không phải ai cũng có một hành trình thuận lợi, có thể đến đích an toàn, thậm chí rất nhiều người đã gục ngã thê thảm, vì đa phần không vượt qua được những trở ngại tâm thức, cũng là bài học lớn nhất trong cuộc đời.',
        },
        {
            id: 47,
            status: 1, 
            title: 'Seeing Gender - Thấy Giới',
            category: "Khoa học",
            img: './assets/img/products/thay-gioi.jpg',
            price: 215000,
            desc: 'Hiện nay, nghiên cứu giới ở Việt Nam đã có nhiều phát triển, không ngừng mở rộng ra mọi chủ đề liên quan tới đời sống kinh tế - xã hội - chính trị. Đặc biệt hơn, các sách về giới liên tục được ra mắt, bàn luận đa dạng đề tài, từ phụ nữ tới những vấn đề trong cộng đồng LGBTQA+. Trong dòng chảy chung, Nhà xuất bản Phụ nữ Việt Nam quyết định xuất bản “Seeing Gender - Thấy giới” – một cuốn sách vô cùng độc đáo được viết từ góc nhìn của người trong cuộc. ',
        },
        {
            id: 48,
            status: 1, 
            title: 'Khoa Học Khám Phá',
            category: "Khoa học",
            img: './assets/img/products/khoa-hoc-va-kham-pha.jpg',
            price: 240000,
            desc: 'Cùng với Lý thuyết hỗn độn, tính ngẫu nhiên và phi tất định đã tràn ngập không chỉ trong thế giới hằng ngày của chúng ta mà cả trong thế giới các thiên hà. Và sự phát triển của những ý tưởng dẫn tới quan niệm mới đó về thế giới đã được vạch ra thật rõ ràng trong cuốn sách Hỗn độn và hài hòa, bằng một ngôn ngữ giản dị, thông qua những ví dụ được rút ra từ vật lý thiên văn, vật lý học, sinh học và toán học.',
        },
        {
            id: 49,
            status: 1, 
            title: 'Công Nghệ Lên Men',
            category: "Khoa học",
            img: './assets/img/products/cong-nghe-len-men.jpg',
            price: 120000,
            desc: 'Công nghệ lên men đề cập đến việc sử dụng có kiểm soát các vi sinh vật, chẳng hạn như vi khuẩn, nấm men hoặc nấm sợi, để chuyển đổi các hợp chất hữu cơ thành các sản phẩm mong muốn thông qua quá trình lên men. Đây là một phương pháp công nghệ sinh học được sử dụng rộng rãi đã được thực hiện trong nhiều thế kỷ trong các ngành công nghiệp khác nhau, bao gồm sản xuất thực phẩm và đồ uống, dược phẩm, nhiên liệu sinh học và nông nghiệp.',
        },
        {
            id: 50,
            status: 1, 
            title: 'Minh Chứng Thiên Đường',
            category: "Khoa học",
            img: './assets/img/products/minh-chung-thien-duong.jpg',
            price: 140000,
            desc: 'Hàng ngàn người đã trải qua trải nghiệm cận tử (near-death experience), nhưng đây vẫn là một chủ đề bí ẩn và đầy tranh cãi. Phần lớn các nhà khoa học cho rằng trải nghiệm này chẳng qua là ảo giác của não bộ khi rơi vào trạng thái căng thẳng tột độ; số khác cho rằng có một điều gì đó vi diệu hơn thế. Tiến sĩ, bác sĩ phẫu thuật thần kinh Eben Alexander từng thuộc nhóm thứ nhất cho đến khi ông tự mình trải qua trải nghiệm cận tử “phiên bản đặc biệt” của riêng ông, trải nghiệm đã khơi nguồn cảm hứng để ông viết nên “Minh chứng thiên đường” (tựa gốc: “Proof of Heaven”). Với góc nhìn khoa học và kinh nghiệm hơn hai mươi năm làm việc trong lĩnh vực giải phẫu thần kinh, Eben Alexander đã tường thuật lại trải nghiệm của mình một cách vừa thuyết phục vừa lôi cuốn trong quyển sách này.',
        },
        {
            id: 51,
            status: 1, 
            title: 'Ứng Dụng Của Công Nghệ Sinh Học',
            category: "Khoa học",
            img: './assets/img/products/ung-dung-cnsh.jpg',
            price: 120000,
            desc: 'Công nghệ Sinh học (Biotechnology) là lĩnh vực sử dụng các nguyên tắc và phương pháp từ sinh học để nghiên cứu, phát triển và ứng dụng trong nhiều lĩnh vực khác nhau. Nó bao gồm sự tương tác giữa các hệ thống sống và công nghệ, nhằm tạo ra các giải pháp cải tiến cho con người, môi trường và nền kinh tế.',
        },
        {
            id: 52,
            status: 1, 
            title: 'Sức Mạnh Của Câu Hỏi',
            category: "Kỹ năng",
            img: './assets/img/products/sm-cau-hoi.jpg',
            price: 118000,
            desc: 'CÁC PHÁT MINH VĨ ĐẠI NHẤT ĐẾN TỪ NHỮNG CÂU HỎI GIẢN ĐƠN NẢY SINH TỪ CUỘC SỐNG THƯỜNG NHẬT!. NHỮNG THÀNH CÔNG ĐÁNG NGƯỠNG MỘ ĐẾN TỪ NHỮNG SỰ HOÀI NGHI VÀ TÒ MÒ VỚI HỆ TRÌNH VẬT CHẤT TIẾP DIỄN!.  ',
        },
        {
            id: 53,
            status: 1, 
            title: 'Tư Duy Ngược',
            category: "Kỹ năng",
            img: './assets/img/products/tu-duy-nguoc.jpg',
            price: 139000,
            desc: 'Chúng ta thực sự có hạnh phúc không? Chúng ta có đang sống cuộc đời mình không? Chúng ta có dám dũng cảm chiến thắng mọi khuôn mẫu, định kiến, đi ngược đám đông để khẳng định bản sắc riêng của mình không?. Có bao giờ bạn tự hỏi như thế, rồi có câu trả lời cho chính mình?. Tôi biết biết, không phải ai cũng đang sống cuộc đời của mình, không phải ai cũng dám vượt qua mọi lối mòn để sáng tạo và thành công… Dựa trên việc nghiên cứu, tìm hiểu, chắt lọc, tìm kiếm, ghi chép từ các câu chuyện trong đời sống, cũng như trải nghiệm của bản thân, tôi viết cuốn sách này. ',
        },
        {
            id: 54,
            status: 1, 
            title: 'Sức Mạnh Của Sự Kỷ Luật',
            category: "Kỹ năng",
            img: './assets/img/products/sm-ky-luat.jpg',
            price: 138000,
            desc: 'KỶ LUẬT HAY LÀ C.H.Ế.T? - THÀNH CÔNG KHÔNG ĐẾN NHỜ SỰ MAY MẮN, TỰ DO HẠNH PHÚC KHÔNG ĐẾN NHỜ SỰ ĐỢI CHỜ LƯỜI BIẾNG. TRỞ THÀNH CHÚA TỂ HAY CON MỒI ĐỀU PHỤ THUỘC VÀO CÁCH BẠN QUYẾT ĐỊNH CUỘC SỐNG CỦA MÌNH.',
        },
        {
            id: 55,
            status: 1, 
            title: 'Dám Nói Có',
            category: "Kỹ năng",
            img: './assets/img/products/dam-noi-co.jpg',
            price: 118000,
            desc: 'Cuốn sách không chỉ đề cập đến việc nói “CÓ” với cuộc sống, mà còn đề cập đến việc tìm ra sức mạnh bên trong chính mình để vượt qua những thách thức và khám phá những cơ hội mới mẻ. Chúng ta đã thấy rằng khi chúng ta dám nói “CÓ”, chúng ta sẽ mở ra cánh cửa của sự tiến bộ và phát triển.',
        },
        {
            id: 56,
            status: 1, 
            title: 'Manifest - 7 Bước Để Thay Đổi Cuộc Đời Bạn Mãi Mãi',
            category: "Kỹ năng",
            img: './assets/img/products/7-buoc-thay-doi-cuoc-doi.jpg',
            price: 89000,
            desc: 'Cuốn sách này là một chỉ dẫn cần thiết cho bất kỳ ai muốn tự làm chủ cuộc đời mình. Chỉ với 7 bước cơ bản, bạn có thể hoàn toàn hiểu được Manifest thực sự là gì và tạo ra một cuộc sống mà bạn hằng mong ước. Cuốn sách này là một chỉ dẫn cần thiết cho bất kỳ ai muốn tự làm chủ cuộc đời mình. Chỉ với 7 bước cơ bản, bạn có thể hoàn toàn hiểu được Manifest thực sự là gì và tạo ra một cuộc sống mà bạn hằng mong ước. ',
        },
        {
            id: 57,
            status: 1, 
            title: 'Càng Bình Tĩnh Càng Hạnh Phúc',
            category: "Kỹ năng",
            img: './assets/img/products/binh-tinh-hp.jpg',
            price: 139000,
            desc: 'Tiếp nối thành công rực rỡ của Bạn đắt giá bao nhiêu?, Khí chất bao nhiêu hạnh phúc bấy nhiêu, Không sợ chậm chỉ sợ dừng,… Vãn Tình đã quay trở lại cùng cuốn sách Càng bình tĩnh Càng hạnh phúc. Đây là cuốn sách thứ bảy của cô được xuất bản tại Việt Nam bởi thương hiệu sách Bloom Books, đánh dấu cho hành trình trưởng thành đầy rực rỡ của Vãn Tình – từ một cô gái trẻ trung, mạnh mẽ trở nên chín chắn, điềm tĩnh và bao dung hơn với cuộc đời. Gần bảy mươi câu chuyện trong sách xoay quanh các chủ đề tình yêu, hôn nhân, gia đình, sự nghiệp… đến từ chính cuộc sống của tác giả và những người xung quanh, vừa thực tế lại vừa gợi mở, dễ dàng giúp chúng ta liên hệ với tình huống của chính mình. Với những câu chuyện đó, Vãn Tình hy vọng có thể giúp các cô gái trưởng thành, độc lập và tự tin hơn, tìm lại bản ngã và sống cuộc đời theo cách mà mình mong muốn.',
        },
        {
            id: 58,
            status: 1, 
            title: 'Càng Kỷ Luật, Càng Tự Do',
            category: "Kỹ năng",
            img: './assets/img/products/cang-ky-luat.jpg',
            price: 109000,
            desc: 'KỶ LUẬT vốn là ván cờ bạn phải tự đấu với chính mình. Thắng - bạn sẽ có được “bản năng của người mạnh mẽ nhất”, đó là sự tự kiểm soát bản thân. Thua - bạn mãi sống trong cảm giác tạm bợ, nuối tiếc. Càng dễ dàng dung túng cho những thói quen trì hoãn bao nhiêu, cuộc sống của bạn sẽ đi càng nhanh tới sự mất kiểm soát và thiếu quy hoạch bấy nhiêu.',
        },
        {
            id: 59,
            status: 1, 
            title: 'Hoàng Tử Bé (Tái Bản 2022)',
            img: './assets/img/products/hoang-tu-be.jpg',
            category: 'Thiếu nhi',
            price: 35000,
            desc: '“...Cậu hoàng tử chợp mắt ngủ, tôi bế em lên vòng tay tôi và lại lên đường. Lòng tôi xúc động. Tôi có cảm giác như trên Mặt Đất này không có gì mong manh hơn. Nhờ ánh sáng trăng, tôi nhìn thấy vầng trán nhợt nhạt ấy, đôi mắt nhắm nghiền các lẵng tóc run rẩy trước gió, và tôi nghĩ thầm: "Cái mà ta nhìn thấy đây chỉ là cái vỏ. Cái quan trọng nhất thì không nhìn thấy được..." ANTOINE DE SAINT-EXUPÉRY'
        },
        {
            id: 60,
            status: 1, 
            title: 'Giữ Lấy Bầu Mật (Tái Bản 2024)',
            img: './assets/img/products/giu-lay-bau-mat.jpg',
            category: 'Thiếu nhi ',
            price: 65000,
            desc: 'Đọc GIỮ LẤY BẦU MẬT, bạn như thấy mình lạc bước vào cuộc sống với những tập tục thú vị, những khung cảnh dữ dội mà rất nên thơ. Bao bọc quanh bạn sẽ là hương thơm trong lành của rừng núi. Và cho đến trang cuối, bạn bỗng nhận ra dù ở thời đại nào, tình người luôn là điều cao đẹp nhất.'
        },
        ]
        localStorage.setItem('products', JSON.stringify(products));
    }
}

// Create admin account 
function createAdminAccount() {
    /*localStorage.removeItem('accounts');*/
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