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
            title: 'Anders Sát Thủ Cùng Bè Lũ',
            img: '',
            category: 'Văn học',
            price: 950000,
            desc: 'Dưới Khung Trời Ngát Xanh'
        },
        {
            id: 25,
            status: 1, 
            title: 'Dưới Khung Trời Ngát Xanh',
            img: '',
            category: 'Văn học',
            price: 350000,
            desc: ''
        },

        {
            id: 26,
            status: 1, 
            title: '',
            category: 'Văn học',
            img: '',
            price: 450000,
            desc: ''
        },

        {
            id: 27,
            status: 1, 
            title: '',
            category: 'Văn học',
            img: '',
            price: 520000,
            desc: ''
        },

        {
            id: 28,
            status: 1, 
            title: '',
            category: 'Văn học',
            img: '',
            price: 350000,
            desc: ''
        },

        {
            id: 29,
            status: 1, 
            title: '',
            category: 'Văn học',
            img: '',
            price: 420000,
            desc: ''
        },

        {
            id: 30,
            status: 1, 
            title: '',
            category: 'Văn học',
            img: '',
            price: 175000,
            desc: ''
        },

        {
            id: 31,
            status: 1, 
            title: '',
            category: 'Văn học',
            img: '',
            price: 350000,
            desc: ''
        },

        {
            id: 32,
            status: 1, 
            title: '',
            category: 'Văn học',
            img: '',
            price: 460000,
            desc: ''
        },

        {
            id: 33,
            status: 1, 
            title: '',
            category: 'Văn học',
            img: '',
            price: 200000,
            desc: ''
        },

        {
            id: 34,
            status: 1, 
            title: '',
            category: 'Văn học',
            img: '',
            price: 270000,
            desc: ''
        },

        {
            id: 35,
            status: 1, 
            title: '',
            category: 'Văn học',
            img: '',
            price: 300000,
            desc: ''
        },

        {
            id: 36,
            status: 1, 
            title: '',
            category: 'Văn học',
            img: '',
            price: 280000,
            desc: ''
        },

        {
            id: 37,
            status: 1, 
            title: '',
            category: 'Văn học',
            img: '',
            price: 280000,
            desc: ''
        },
        {
            id: 38,
            status: 1, 
            title: '',
            category: 'Văn học',
            img: '',
            price: 140000,
            desc: ''
        },
        {
            id: 39,
            status: 1, 
            title: '',
            category: 'Món tráng miệng',
            img: '',
            price: 60000,
            desc: ''
        },

        {
            id: 40,
            status: 1, 
            title: '',
            category: 'Món tráng miệng',
            img: '',
            price: 50000,
            desc: ''
        },

        {
            id: 41,
            status: 1, 
            title: '',
            category: 'Món tráng miệng',
            img: '',
            price: 50000,
            desc: ''
        },
        {
            id: 42,
            status: 1, 
            title: '',
            category: "Món lẩu",
            img: '',
            price: 699000,
            desc: '',
        },
        {
            id: 43,
            status: 1, 
            title: '',
            category: "Món lẩu",
            img: '',
            price: 550000,
            desc: '',
        },
        {
            id: 44,
            status: 1, 
            title: '',
            category: "Món chay",
            img: '',
            price: 220000,
            desc: '',
        },
        {
            id: 45,
            status: 1, 
            title: '',
            category: "Món chay",
            img: 'g',
            price: 75000,
            desc: '',
        },
        {
            id: 46,
            status: 1, 
            title: '',
            category: "Món chay",
            img: '',
            price: 75000,
            desc: '',
        },
        {
            id: 47,
            status: 1, 
            title: '',
            category: "Món chay",
            img: '',
            price: 170000,
            desc: '',
        },
        {
            id: 48,
            status: 1, 
            title: '',
            category: "Món chay",
            img: '',
            price: 120000,
            desc: '',
        },
        {
            id: 49,
            status: 1, 
            title: '',
            category: "Món chay",
            img: '',
            price: 80000,
            desc: '',
        },
        {
            id: 50,
            status: 1, 
            title: '',
            category: "Món chay",
            img: '',
            price: 70000,
            desc: '',
        },
        {
            id: 51,
            status: 1, 
            title: '',
            category: "Món chay",
            img: '',
            price: 160000,
            desc: '',
        },
        {
            id: 52,
            status: 1, 
            title: '',
            category: "Món ăn vặt",
            img: '',
            price: 20000,
            desc: '',
        },
        {
            id: 53,
            status: 1, 
            title: '',
            category: "Món ăn vặt",
            img: '',
            price: 10000,
            desc: ' ',
        },
        {
            id: 54,
            status: 1, 
            title: '',
            category: "",
            img: '',
            price: 50000,
            desc: '',
        },
        {
            id: 55,
            status: 1, 
            title: '',
            category: "Món ăn vặt",
            img: '',
            price: 60000,
            desc: '',
        },
        {
            id: 56,
            status: 1, 
            title: '',
            category: "Món ăn vặt",
            img: '',
            price: 99000,
            desc: '',
        },
        {
            id: 57,
            status: 1, 
            title: '',
            category: "Món ăn vặt",
            img: '',
            price: 49000,
            desc: '',
        },
        {
            id: 58,
            status: 1, 
            title: '',
            category: "Món ăn vặt",
            img: '',
            price: 60000,
            desc: '',
        },
        {
            id: 59,
            status: 1, 
            title: '',
            img: '',
            category: 'Món mặn',
            price: 130000,
            desc: ''
        },
        {
            id: 60,
            status: 1, 
            title: '',
            img: '',
            category: 'Nước uống',
            price: 100000,
            desc: ''
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