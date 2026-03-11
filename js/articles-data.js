// ===== Categories =====
const categories = [
  { id: 'cong-nghe', label: 'Công nghệ', icon: 'fa-microchip', color: '#3b82f6' },
  { id: 'kinh-doanh', label: 'Kinh doanh', icon: 'fa-chart-line', color: '#22c55e' },
  { id: 'khoa-hoc', label: 'Khoa học', icon: 'fa-flask', color: '#a855f7' },
  { id: 'giai-tri', label: 'Giải trí', icon: 'fa-film', color: '#ec4899' },
  { id: 'doi-song', label: 'Đời sống', icon: 'fa-heart', color: '#f97316' },
  { id: 'the-gioi', label: 'Thế giới', icon: 'fa-globe', color: '#ef4444' }
];

// ===== Team Members =====
const teamMembers = [
  {
    name: 'Phan Quang Bảo Long',
    role: 'Create domain',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    tasks: [
      { title: 'Domain setup', status: 'done' },
      { title: 'DNS config', status: 'done' },
      { title: 'SSL certificate', status: 'done' }
    ]
  },
  {
    name: 'Trương Lê Bình Minh',
    role: 'Provide ideas',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    tasks: [
      { title: 'Content strategy', status: 'done' },
      { title: 'Feature proposals', status: 'done' },
      { title: 'UX research', status: 'done' }
    ]
  },
  {
    name: 'Hồ Đắc Anh Kiệt',
    role: 'Design web',
    avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
    tasks: [
      { title: 'UI mockups', status: 'done' },
      { title: 'Color scheme', status: 'done' },
      { title: 'Responsive layouts', status: 'done' }
    ]
  },
  {
    name: 'Mai Hồng Nhật Minh',
    role: 'Code web',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    tasks: [
      { title: 'Frontend development', status: 'done' },
      { title: 'JS logic', status: 'done' },
      { title: 'Testing', status: 'done' }
    ]
  }
];

// ===== Articles =====
const articles = [
  {
    id: 1,
    title: 'Trí tuệ nhân tạo năm 2026: Những đột phá đáng chú ý',
    excerpt: 'Khám phá những tiến bộ vượt bậc trong lĩnh vực AI đang thay đổi cách chúng ta sống và làm việc.',
    category: 'cong-nghe',
    author: 'Nguyễn Văn An',
    authorAvatar: 'https://ui-avatars.com/api/?name=Van+An&background=3b82f6&color=fff',
    date: '2026-03-10',
    readTime: 8,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    featured: true,
    views: 15234,
    tags: ['AI', 'Machine Learning', 'Công nghệ'],
    content: `<p>Năm 2026 đánh dấu một bước ngoặt lớn trong lĩnh vực trí tuệ nhân tạo. Các mô hình ngôn ngữ lớn đã đạt đến mức độ hiểu biết và sáng tạo chưa từng có, mở ra vô số ứng dụng mới trong đời sống hàng ngày. Từ việc viết code tự động đến sáng tác nhạc, từ chẩn đoán bệnh đến lái xe tự hành, AI đang len lỏi vào mọi ngóc ngách của cuộc sống hiện đại.</p>
    <h2>Những xu hướng nổi bật</h2>
    <p>Từ y tế đến giáo dục, AI đang được tích hợp vào mọi lĩnh vực. Các bệnh viện sử dụng AI để chẩn đoán bệnh chính xác hơn, trong khi các trường học áp dụng AI để cá nhân hóa việc học. Đặc biệt, các mô hình AI đa phương thức — có khả năng xử lý đồng thời văn bản, hình ảnh, âm thanh và video — đã trở thành tiêu chuẩn mới của ngành.</p>
    <p>Trong lĩnh vực y tế, AI đã giúp phát hiện sớm ung thư với độ chính xác lên đến 97%, vượt xa khả năng của các bác sĩ chuyên khoa giàu kinh nghiệm nhất. Các hệ thống AI còn có thể dự đoán nguy cơ mắc bệnh tim mạch trước 5 năm, cho phép bệnh nhân can thiệp kịp thời.</p>
    <blockquote>AI không thay thế con người, mà trao quyền cho con người làm được nhiều hơn. Đây là cuộc cách mạng về năng suất lớn nhất kể từ khi phát minh ra Internet.</blockquote>
    <h2>AI trong giáo dục: Cá nhân hóa hoàn toàn</h2>
    <p>Hệ thống gia sư AI đã thay đổi hoàn toàn cách học sinh tiếp cận kiến thức. Mỗi học sinh có một lộ trình học tập riêng, được điều chỉnh theo tốc độ, phong cách học và sở thích cá nhân. Kết quả cho thấy học sinh sử dụng gia sư AI có điểm số trung bình cao hơn 35% so với phương pháp truyền thống.</p>
    <p>Các trường đại học hàng đầu như MIT, Stanford và Đại học Bách khoa Hà Nội đã tích hợp AI vào chương trình giảng dạy, không chỉ như công cụ hỗ trợ mà còn như một phần không thể thiếu của quy trình nghiên cứu.</p>
    <h2>Tác động đến thị trường lao động</h2>
    <p>Nhiều công việc mới được tạo ra trong lĩnh vực quản lý và giám sát AI. Kỹ năng làm việc với AI trở thành yêu cầu bắt buộc trong hầu hết các ngành nghề. Theo báo cáo của McKinsey, đến cuối năm 2026, khoảng 60% công việc văn phòng sẽ có ít nhất một phần được hỗ trợ bởi AI.</p>
    <p>Tuy nhiên, điều đáng mừng là AI không xóa bỏ việc làm mà chuyển đổi chúng. Các vị trí như AI Trainer, Prompt Engineer, AI Ethics Officer và AI-Human Collaboration Specialist đang có nhu cầu tuyển dụng tăng vọt 400% so với năm 2024.</p>
    <h3>Kỹ năng cần thiết trong kỷ nguyên AI</h3>
    <ul>
      <li>Prompt engineering và giao tiếp với AI — biết cách đặt câu hỏi đúng</li>
      <li>Phân tích dữ liệu và tư duy phản biện — đánh giá kết quả AI tạo ra</li>
      <li>Sáng tạo và giải quyết vấn đề phức tạp — những gì AI chưa thể thay thế</li>
      <li>Đạo đức AI và quản trị rủi ro — đảm bảo AI được sử dụng có trách nhiệm</li>
      <li>Kỹ năng liên ngành — kết hợp chuyên môn lĩnh vực với khả năng công nghệ</li>
    </ul>
    <h2>Thách thức về đạo đức và quy định</h2>
    <p>Sự phát triển nhanh chóng của AI cũng đặt ra nhiều câu hỏi về đạo đức. Vấn đề deepfake, thiên kiến trong thuật toán, quyền riêng tư dữ liệu và trách nhiệm pháp lý khi AI gây ra sai sót đang là những chủ đề nóng trên bàn nghị sự của các chính phủ trên toàn thế giới.</p>
    <p>Liên minh châu Âu đã đi đầu với Đạo luật AI (AI Act), thiết lập khung pháp lý toàn diện đầu tiên trên thế giới. Việt Nam cũng đang xây dựng chiến lược quốc gia về AI với mục tiêu trở thành trung tâm AI hàng đầu Đông Nam Á vào năm 2030.</p>
    <h2>Tương lai phía trước</h2>
    <p>Tương lai của AI hứa hẹn sẽ còn nhiều điều thú vị hơn nữa trong những năm tới. Các chuyên gia dự đoán rằng đến năm 2028, AI sẽ có khả năng thực hiện hầu hết các tác vụ nhận thức ở mức con người, mở ra một kỷ nguyên hoàn toàn mới cho nhân loại. Câu hỏi không còn là "AI có thể làm gì?" mà là "Chúng ta muốn AI làm gì cho mình?"</p>`
  },
  {
    id: 2,
    title: 'Startup Việt Nam gọi vốn thành công 50 triệu USD',
    excerpt: 'Câu chuyện thành công của startup công nghệ Việt Nam trong việc thu hút đầu tư quốc tế.',
    category: 'kinh-doanh',
    author: 'Trần Thị Bình',
    authorAvatar: 'https://ui-avatars.com/api/?name=Thi+Binh&background=22c55e&color=fff',
    date: '2026-03-09',
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80',
    featured: true,
    views: 12567,
    tags: ['Startup', 'Đầu tư', 'Việt Nam'],
    content: `<p>Một startup công nghệ tại TP.HCM vừa hoàn tất vòng gọi vốn Series B trị giá 50 triệu USD, trở thành một trong những thương vụ gọi vốn lớn nhất của startup Việt Nam trong năm 2026. Thương vụ này không chỉ là tin vui cho riêng công ty mà còn là tín hiệu tích cực cho toàn bộ hệ sinh thái khởi nghiệp Việt Nam.</p>
    <h2>Mô hình kinh doanh độc đáo</h2>
    <p>Startup này tập trung vào giải pháp fintech cho thị trường Đông Nam Á, với sản phẩm thanh toán số tích hợp AI giúp doanh nghiệp vừa và nhỏ quản lý tài chính hiệu quả hơn. Nền tảng của họ cho phép các tiểu thương và SMEs tiếp cận các dịch vụ tài chính mà trước đây chỉ dành cho doanh nghiệp lớn — từ phân tích dòng tiền đến dự báo doanh thu.</p>
    <p>Điểm khác biệt lớn nhất là công nghệ AI có thể tự động phân loại giao dịch, phát hiện gian lận trong thời gian thực và đưa ra gợi ý tối ưu hóa chi phí cho từng doanh nghiệp. Tỷ lệ phát hiện gian lận đạt 99.7%, cao hơn đáng kể so với các giải pháp truyền thống.</p>
    <h2>Hành trình gọi vốn</h2>
    <p>Vòng Series B được dẫn dắt bởi quỹ đầu tư Sequoia Capital Southeast Asia, với sự tham gia của GIC (Singapore), Temasek và một số quỹ đầu tư mạo hiểm hàng đầu khu vực. Trước đó, startup đã huy động được 12 triệu USD trong vòng Series A vào năm 2024.</p>
    <blockquote>Chúng tôi tin rằng Đông Nam Á là thị trường fintech tiềm năng nhất thế giới hiện nay. Với 400 triệu người chưa được phục vụ đầy đủ bởi hệ thống ngân hàng truyền thống, cơ hội là vô cùng lớn.</blockquote>
    <h2>Kế hoạch mở rộng</h2>
    <p>Với nguồn vốn mới, công ty dự kiến mở rộng hoạt động sang Philippines, Indonesia và Thái Lan trong 18 tháng tới. Đội ngũ sẽ được tăng từ 150 lên 500 nhân viên, tập trung tuyển dụng kỹ sư AI, chuyên gia dữ liệu và nhân sự phát triển thị trường.</p>
    <h3>Các mốc mục tiêu cụ thể</h3>
    <ul>
      <li>Quý 3/2026: Ra mắt tại Philippines với 10.000 doanh nghiệp đăng ký</li>
      <li>Quý 4/2026: Mở rộng sang Indonesia — thị trường lớn nhất Đông Nam Á</li>
      <li>Quý 1/2027: Triển khai tại Thái Lan và Malaysia</li>
      <li>Năm 2028: Đạt 1 triệu doanh nghiệp sử dụng trên toàn khu vực</li>
    </ul>
    <h2>Bối cảnh startup Việt Nam</h2>
    <p>Thương vụ này diễn ra trong bối cảnh hệ sinh thái startup Việt Nam đang ngày càng trưởng thành. Theo báo cáo của Do Ventures, tổng vốn đầu tư vào startup Việt Nam năm 2025 đạt 1.2 tỷ USD, tăng 40% so với năm trước. Việt Nam hiện có hơn 3.800 startup hoạt động, trong đó có 4 "kỳ lân" (unicorn) với định giá trên 1 tỷ USD.</p>
    <p>Các chuyên gia nhận định rằng lợi thế của Việt Nam nằm ở dân số trẻ, tỷ lệ sử dụng smartphone cao (hơn 75%), và chi phí nhân lực công nghệ cạnh tranh so với khu vực. Chính phủ cũng đang tạo nhiều điều kiện thuận lợi thông qua các chính sách ưu đãi thuế và quỹ hỗ trợ đổi mới sáng tạo.</p>
    <h2>Bài học cho các startup khác</h2>
    <p>CEO của startup chia sẻ rằng chìa khóa thành công nằm ở ba yếu tố: giải quyết vấn đề thực sự của thị trường, xây dựng đội ngũ xuất sắc, và kiên nhẫn trong việc tìm product-market fit. "Chúng tôi đã pivot hai lần trước khi tìm được mô hình hiện tại. Sự kiên trì và khả năng lắng nghe khách hàng là điều quan trọng nhất," anh cho biết.</p>`
  },
  {
    id: 3,
    title: 'Phát hiện mới về hố đen vũ trụ gây chấn động giới khoa học',
    excerpt: 'Các nhà khoa học đã quan sát được hiện tượng chưa từng thấy ở hố đen siêu lớn.',
    category: 'khoa-hoc',
    author: 'Lê Minh Châu',
    authorAvatar: 'https://ui-avatars.com/api/?name=Minh+Chau&background=a855f7&color=fff',
    date: '2026-03-08',
    readTime: 10,
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80',
    featured: false,
    views: 9876,
    tags: ['Vũ trụ', 'Khoa học', 'Hố đen'],
    content: `<p>Sử dụng kính thiên văn thế hệ mới, các nhà khoa học đã phát hiện một hố đen siêu lớn có hành vi bất thường, thách thức các lý thuyết vật lý hiện tại. Phát hiện này được công bố trên tạp chí Nature và ngay lập tức thu hút sự chú ý của cộng đồng thiên văn học toàn cầu.</p>
    <h2>Chi tiết phát hiện</h2>
    <p>Hố đen này nằm cách Trái Đất khoảng 3 tỷ năm ánh sáng và có khối lượng gấp 40 tỷ lần Mặt Trời. Điều đặc biệt là nó phát ra các tia năng lượng theo mô hình chưa từng được ghi nhận — những xung năng lượng có chu kỳ đều đặn mỗi 22 phút, thay vì phát liên tục như các hố đen hoạt động khác.</p>
    <p>Nhóm nghiên cứu quốc tế gồm hơn 200 nhà khoa học từ 45 quốc gia đã sử dụng Kính thiên văn Chân trời Sự kiện thế hệ 2 (EHT-2) kết hợp với dữ liệu từ Kính viễn vọng Không gian James Webb để quan sát hiện tượng này trong suốt 18 tháng.</p>
    <blockquote>Đây là lần đầu tiên chúng tôi quan sát được một hố đen "nhịp đập" như vậy. Nó giống như trái tim của vũ trụ đang đập theo nhịp riêng của mình. — GS. Elena Rodriguez, Đại học Cambridge</blockquote>
    <h2>Tại sao phát hiện này quan trọng?</h2>
    <p>Theo thuyết tương đối tổng quát của Einstein, hố đen không nên có hành vi tuần hoàn như vậy. Các mô hình vật lý hiện tại dự đoán rằng vật chất rơi vào hố đen sẽ phát ra năng lượng một cách hỗn loạn, không có quy luật. Sự tồn tại của "xung nhịp" đều đặn gợi ý rằng có một cơ chế vật lý chưa được biết đến đang vận hành.</p>
    <h3>Ba giả thuyết được đề xuất</h3>
    <ul>
      <li>Tương tác giữa hố đen và một ngôi sao neutron quay quanh nó ở khoảng cách cực gần</li>
      <li>Hiệu ứng lượng tử ở quy mô vĩ mô — điều chưa từng được quan sát trước đây</li>
      <li>Sự tồn tại của một dạng vật chất mới chưa được biết đến trong đĩa bồi tụ</li>
    </ul>
    <h2>Công nghệ quan sát đột phá</h2>
    <p>Kính thiên văn EHT-2 là bước tiến vượt bậc so với phiên bản đầu tiên đã chụp được hình ảnh hố đen đầu tiên năm 2019. Với độ phân giải gấp 10 lần, EHT-2 có thể quan sát chi tiết cấu trúc xung quanh hố đen với độ chính xác chưa từng có. Hệ thống bao gồm 15 kính thiên văn vô tuyến phân bố trên 6 châu lục, hoạt động đồng bộ như một kính thiên văn khổng lồ có kích thước bằng Trái Đất.</p>
    <h2>Ý nghĩa khoa học</h2>
    <p>Phát hiện này có thể dẫn đến việc sửa đổi các mô hình vật lý thiên văn hiện tại và mở ra hướng nghiên cứu mới về bản chất của không-thời gian. Nếu giả thuyết về hiệu ứng lượng tử vĩ mô được xác nhận, đây sẽ là bằng chứng đầu tiên cho thấy cơ học lượng tử và thuyết tương đối tổng quát có thể được thống nhất — "chén thánh" của vật lý lý thuyết suốt hơn một thế kỷ qua.</p>
    <p>Các nhóm nghiên cứu trên toàn thế giới đang lên kế hoạch quan sát bổ sung trong năm 2026-2027 để thu thập thêm dữ liệu và kiểm chứng các giả thuyết. Đây hứa hẹn sẽ là một trong những khám phá khoa học quan trọng nhất của thập kỷ.</p>`
  },
  {
    id: 4,
    title: 'Review phim bom tấn mùa hè 2026: Đáng xem hay thất vọng?',
    excerpt: 'Tổng hợp đánh giá các bộ phim bom tấn được mong chờ nhất mùa hè năm nay.',
    category: 'giai-tri',
    author: 'Phạm Hoàng Duy',
    authorAvatar: 'https://ui-avatars.com/api/?name=Hoang+Duy&background=ec4899&color=fff',
    date: '2026-03-07',
    readTime: 7,
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80',
    featured: false,
    views: 18932,
    tags: ['Phim', 'Review', 'Giải trí'],
    content: `<p>Mùa hè 2026 hứa hẹn sẽ là một mùa phim bom tấn đáng nhớ với loạt phim được đầu tư khủng từ các hãng phim lớn. Tổng kinh phí sản xuất của 10 bộ phim bom tấn lớn nhất mùa hè này vượt mốc 3 tỷ USD, phản ánh cuộc chạy đua ngày càng khốc liệt giữa các hãng phim Hollywood.</p>
    <h2>Top 5 phim đáng xem nhất</h2>
    <p>Từ phim siêu anh hùng đến phim khoa học viễn tưởng, danh sách phim mùa hè năm nay có đủ thể loại cho mọi khán giả. Dưới đây là những cái tên nổi bật nhất được giới phê bình đánh giá cao:</p>
    <ul>
      <li><strong>"Horizon Beyond"</strong> — Bộ phim sci-fi của Christopher Nolan với kinh phí 280 triệu USD, kể về cuộc hành trình xuyên không gian-thời gian. Điểm Rotten Tomatoes: 94%.</li>
      <li><strong>"The Last Guardian"</strong> — Phim siêu anh hùng mới nhất của Marvel, đánh dấu sự khởi đầu của một saga mới sau Multiverse Saga. Doanh thu mở màn dự kiến 350 triệu USD toàn cầu.</li>
      <li><strong>"Echoes of War"</strong> — Phim chiến tranh sử thi của Denis Villeneuve, được đánh giá là tác phẩm xuất sắc nhất sự nghiệp ông.</li>
      <li><strong>"Saigon Night"</strong> — Bộ phim hành động Việt Nam đầu tiên phát hành toàn cầu, gây tiếng vang lớn tại các liên hoan phim quốc tế.</li>
      <li><strong>"Deep Blue"</strong> — Phim kinh dị dưới đại dương với kỹ xảo đỉnh cao, tạo trải nghiệm IMAX đáng sợ nhất từ trước đến nay.</li>
    </ul>
    <h2>Xu hướng đáng chú ý</h2>
    <p>Năm 2026 chứng kiến sự trỗi dậy mạnh mẽ của phim châu Á trên thị trường quốc tế. Sau thành công của "Parasite" và "Everything Everywhere All at Once", ngày càng nhiều hãng phim Hollywood hợp tác với đạo diễn và diễn viên châu Á, tạo nên những bộ phim đa văn hóa hấp dẫn.</p>
    <blockquote>Điện ảnh mùa hè 2026 không chỉ về cháy nổ và kỹ xảo. Khán giả ngày nay đòi hỏi câu chuyện sâu sắc, nhân vật đa chiều và thông điệp ý nghĩa. — Tạp chí Variety</blockquote>
    <h2>Phim nào gây thất vọng?</h2>
    <p>Không phải bộ phim nào cũng đạt kỳ vọng. Một số phim dù có kinh phí khổng lồ nhưng lại nhận về những đánh giá không mấy tích cực từ giới phê bình. Đáng chú ý nhất là phần tiếp theo của một franchise nổi tiếng bị chê là "lặp lại công thức cũ" với điểm phê bình chỉ đạt 32% trên Rotten Tomatoes.</p>
    <p>Các bộ phim remake và reboot tiếp tục nhận phải sự hoài nghi từ khán giả. Xu hướng "nostalgia bait" — khai thác hoài niệm mà không mang lại giá trị mới — đang dần mất hiệu quả khi công chúng ngày càng khắt khe hơn.</p>
    <h2>Công nghệ thay đổi trải nghiệm xem phim</h2>
    <p>Mùa hè năm nay cũng đánh dấu sự ra mắt của công nghệ chiếu phim holographic tại một số rạp cao cấp, mang đến trải nghiệm 3D không cần kính. Bên cạnh đó, hệ thống âm thanh Dolby Atmos FlexConnect cho phép tùy chỉnh trải nghiệm âm thanh theo từng ghế ngồi.</p>
    <h3>Cuộc chiến streaming vs rạp chiếu</h3>
    <p>Cuộc cạnh tranh giữa streaming và rạp chiếu tiếp tục nóng lên. Tuy nhiên, doanh thu phòng vé mùa hè 2026 cho thấy khán giả vẫn sẵn sàng đến rạp cho những trải nghiệm điện ảnh thực sự đáng giá. Bí quyết nằm ở chất lượng nội dung và trải nghiệm mà màn hình nhỏ không thể thay thế.</p>`
  },
  {
    id: 5,
    title: 'Bí quyết sống khỏe mạnh từ người dân vùng Blue Zone',
    excerpt: 'Học hỏi lối sống từ những vùng có tỷ lệ sống thọ cao nhất thế giới.',
    category: 'doi-song',
    author: 'Vũ Thị Hương',
    authorAvatar: 'https://ui-avatars.com/api/?name=Thi+Huong&background=f97316&color=fff',
    date: '2026-03-06',
    readTime: 5,
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
    featured: false,
    views: 7654,
    tags: ['Sức khỏe', 'Đời sống', 'Blue Zone'],
    content: `<p>Các vùng Blue Zone là những nơi có tỷ lệ người sống trên 100 tuổi cao nhất thế giới. Vậy bí quyết sống thọ của họ là gì? Nghiên cứu kéo dài hơn 20 năm của nhà thám hiểm Dan Buettner và đội ngũ National Geographic đã xác định 5 vùng Blue Zone trên thế giới và những bài học quý giá từ lối sống của cư dân nơi đây.</p>
    <h2>5 vùng Blue Zone trên thế giới</h2>
    <ul>
      <li><strong>Okinawa, Nhật Bản</strong> — Nơi phụ nữ sống thọ nhất thế giới</li>
      <li><strong>Sardinia, Ý</strong> — Nơi có tỷ lệ nam giới sống trên 100 tuổi cao nhất</li>
      <li><strong>Nicoya, Costa Rica</strong> — Tỷ lệ tử vong ở tuổi trung niên thấp nhất thế giới</li>
      <li><strong>Ikaria, Hy Lạp</strong> — Tỷ lệ mắc chứng sa sút trí tuệ cực thấp</li>
      <li><strong>Loma Linda, California</strong> — Cộng đồng Cơ đốc Phục lâm sống thọ hơn trung bình 10 năm</li>
    </ul>
    <h2>Chế độ ăn uống</h2>
    <p>Người dân Blue Zone ăn chủ yếu thực vật, với nhiều đậu, rau xanh và ngũ cốc nguyên hạt. Họ ăn ít thịt đỏ và tránh thực phẩm chế biến sẵn. Đặc biệt, đậu đen, đậu lăng và đậu nành xuất hiện trong hầu hết các bữa ăn, cung cấp protein thực vật dồi dào.</p>
    <p>Tại Okinawa, người dân áp dụng nguyên tắc "Hara Hachi Bu" — ăn đến khi no 80% rồi dừng. Nguyên tắc đơn giản này giúp kiểm soát lượng calo nạp vào và giảm áp lực lên hệ tiêu hóa. Chế độ ăn của họ giàu khoai lang tím, đậu phụ, rong biển và trà xanh.</p>
    <blockquote>Bí quyết sống thọ không nằm ở thuốc bổ hay thực phẩm chức năng, mà ở những bữa ăn đơn giản, tự nhiên được chia sẻ cùng những người thân yêu. — Dan Buettner</blockquote>
    <h2>Vận động tự nhiên</h2>
    <p>Thay vì tập gym, họ vận động tự nhiên trong cuộc sống hàng ngày — đi bộ, làm vườn, và các hoạt động thể chất nhẹ nhàng. Người dân Sardinia chăn cừu trên những ngọn đồi, cuốc bộ hàng chục km mỗi ngày. Người Okinawa làm vườn đến tận 90 tuổi. Không có ai trong số họ chạy marathon hay nâng tạ — họ chỉ sống một cuộc sống đòi hỏi vận động liên tục ở cường độ vừa phải.</p>
    <h3>Kết nối cộng đồng</h3>
    <p>Một yếu tố quan trọng khác là sự kết nối xã hội mạnh mẽ. Họ duy trì các mối quan hệ gia đình và cộng đồng chặt chẽ. Tại Okinawa, mọi người tham gia "Moai" — nhóm bạn cam kết gắn bó suốt đời, hỗ trợ nhau về tài chính lẫn tinh thần. Tại Sardinia, người già được kính trọng và sống cùng gia đình nhiều thế hệ.</p>
    <h2>Mục đích sống (Ikigai)</h2>
    <p>Người Okinawa gọi đó là "Ikigai", người Costa Rica gọi là "Plan de Vida" — mỗi sáng thức dậy với một lý do rõ ràng để sống. Nghiên cứu cho thấy những người có mục đích sống rõ ràng có tuổi thọ trung bình cao hơn 7 năm so với những người không có. Đó có thể là chăm sóc cháu chắt, làm vườn, hay đơn giản là nấu bữa ăn ngon cho gia đình.</p>
    <h2>Áp dụng vào cuộc sống hiện đại</h2>
    <p>Bạn không cần sống ở Blue Zone để hưởng lợi từ lối sống này. Hãy bắt đầu bằng những thay đổi nhỏ: ăn thêm rau và đậu, đi bộ 30 phút mỗi ngày, dành thời gian cho gia đình và bạn bè, và tìm cho mình một mục đích sống ý nghĩa. Những thay đổi nhỏ này, tích lũy theo thời gian, có thể mang lại kết quả đáng kinh ngạc cho sức khỏe và tuổi thọ của bạn.</p>`
  },
  {
    id: 6,
    title: 'Blockchain và tương lai của tài chính phi tập trung',
    excerpt: 'DeFi đang định hình lại cách chúng ta nghĩ về tài chính và ngân hàng truyền thống.',
    category: 'cong-nghe',
    author: 'Đỗ Quang Hải',
    authorAvatar: 'https://ui-avatars.com/api/?name=Quang+Hai&background=3b82f6&color=fff',
    date: '2026-03-05',
    readTime: 9,
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
    featured: false,
    views: 11234,
    tags: ['Blockchain', 'DeFi', 'Crypto'],
    content: `<p>Tài chính phi tập trung (DeFi) tiếp tục phát triển mạnh mẽ, mang đến những cơ hội mới cho cả nhà đầu tư và người dùng thông thường. Tổng giá trị khóa (TVL) trong các giao thức DeFi đã vượt mốc 300 tỷ USD vào đầu năm 2026, cho thấy sự tin tưởng ngày càng tăng của thị trường vào hệ sinh thái này.</p>
    <h2>DeFi là gì?</h2>
    <p>DeFi là hệ thống tài chính được xây dựng trên blockchain, cho phép người dùng vay, cho vay, giao dịch mà không cần trung gian như ngân hàng. Thay vì phụ thuộc vào các tổ chức tài chính truyền thống, DeFi sử dụng hợp đồng thông minh (smart contracts) — các chương trình tự động thực thi trên blockchain — để xử lý mọi giao dịch.</p>
    <p>Điều này có nghĩa là bất kỳ ai có kết nối Internet đều có thể tiếp cận các dịch vụ tài chính như cho vay, bảo hiểm, giao dịch phái sinh mà không cần tài khoản ngân hàng hay giấy tờ tùy thân. Đây là cuộc cách mạng đặc biệt quan trọng với 1.7 tỷ người trên thế giới chưa có tài khoản ngân hàng.</p>
    <h2>Các ứng dụng DeFi phổ biến</h2>
    <ul>
      <li><strong>Lending/Borrowing:</strong> Aave, Compound — cho vay và vay với lãi suất do thuật toán quyết định</li>
      <li><strong>DEX (Sàn giao dịch phi tập trung):</strong> Uniswap, SushiSwap — giao dịch token trực tiếp giữa người dùng</li>
      <li><strong>Yield Farming:</strong> Cung cấp thanh khoản để nhận phần thưởng, lãi suất có thể lên đến 20-50%/năm</li>
      <li><strong>Stablecoins:</strong> USDC, DAI — tiền điện tử ổn định neo giá theo USD</li>
      <li><strong>Insurance:</strong> Nexus Mutual — bảo hiểm phi tập trung cho các rủi ro smart contract</li>
    </ul>
    <blockquote>DeFi không chỉ là công nghệ tài chính mới. Đó là sự dân chủ hóa tài chính — mang đến cho mọi người quyền truy cập bình đẳng vào các dịch vụ tài chính mà trước đây chỉ dành cho giới thượng lưu.</blockquote>
    <h2>DeFi 2.0: Bước tiến mới</h2>
    <p>Thế hệ DeFi 2.0 đang giải quyết nhiều hạn chế của thế hệ đầu tiên. Các giao thức mới tập trung vào khả năng mở rộng (scalability), trải nghiệm người dùng thân thiện hơn, và tích hợp với tài sản thực (Real World Assets — RWA). Việc token hóa bất động sản, trái phiếu chính phủ và hàng hóa đang tạo ra cầu nối giữa tài chính truyền thống và DeFi.</p>
    <h2>Rủi ro cần lưu ý</h2>
    <p>Dù có nhiều tiềm năng, DeFi cũng đi kèm rủi ro về bảo mật, biến động giá và quy định pháp lý. Năm 2025, các vụ hack DeFi gây thiệt hại tổng cộng 1.8 tỷ USD. Các lỗ hổng smart contract, rug pull (dự án lừa đảo) và flash loan attack là những rủi ro phổ biến nhất.</p>
    <h3>Cách bảo vệ tài sản trong DeFi</h3>
    <ul>
      <li>Chỉ sử dụng các giao thức đã được kiểm toán bởi các công ty bảo mật uy tín</li>
      <li>Đa dạng hóa danh mục đầu tư — không bỏ tất cả trứng vào một rổ</li>
      <li>Sử dụng ví phần cứng để bảo vệ khóa riêng</li>
      <li>Nghiên cứu kỹ trước khi đầu tư — "DYOR" (Do Your Own Research)</li>
    </ul>
    <h2>Tương lai DeFi tại Việt Nam</h2>
    <p>Việt Nam là một trong những quốc gia có tỷ lệ áp dụng crypto và DeFi cao nhất thế giới. Với dân số trẻ, am hiểu công nghệ và hệ thống ngân hàng truyền thống chưa phủ sóng đến mọi vùng miền, DeFi có tiềm năng lớn để bổ sung cho hệ thống tài chính hiện tại. Tuy nhiên, khung pháp lý rõ ràng vẫn là điều cần thiết để bảo vệ nhà đầu tư và thúc đẩy phát triển bền vững.</p>`
  },
  {
    id: 7,
    title: 'Thị trường bất động sản 2026: Xu hướng và dự báo',
    excerpt: 'Phân tích chi tiết về thị trường bất động sản Việt Nam trong năm 2026.',
    category: 'kinh-doanh',
    author: 'Nguyễn Thanh Tùng',
    authorAvatar: 'https://ui-avatars.com/api/?name=Thanh+Tung&background=22c55e&color=fff',
    date: '2026-03-04',
    readTime: 11,
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    featured: false,
    views: 14567,
    tags: ['Bất động sản', 'Đầu tư', 'Thị trường'],
    content: `<p>Thị trường bất động sản Việt Nam năm 2026 chứng kiến nhiều biến động đáng chú ý với sự phục hồi mạnh mẽ của phân khúc nhà ở. Sau giai đoạn trầm lắng kéo dài từ 2022-2024, thị trường đã tìm lại đà tăng trưởng nhờ các chính sách hỗ trợ của Chính phủ và sự cải thiện của niềm tin nhà đầu tư.</p>
    <h2>Bức tranh tổng quan</h2>
    <p>Theo số liệu từ Bộ Xây dựng, tổng giao dịch bất động sản trong quý 1/2026 tăng 45% so với cùng kỳ năm trước. Giá nhà tại Hà Nội và TP.HCM tăng trung bình 8-12%, trong khi các thành phố vệ tinh như Bình Dương, Long An, Hưng Yên chứng kiến mức tăng ấn tượng hơn, lên đến 15-20%.</p>
    <blockquote>Năm 2026 là năm thị trường bất động sản Việt Nam chính thức bước vào chu kỳ phục hồi mới. Các yếu tố nền tảng về dân số, đô thị hóa và phát triển hạ tầng vẫn rất vững chắc. — TS. Nguyễn Văn Đính, Hội Môi giới BĐS Việt Nam</blockquote>
    <h2>Phân khúc nổi bật</h2>
    <p>Bất động sản công nghiệp và logistics tiếp tục là điểm sáng nhờ làn sóng FDI và sự phát triển của thương mại điện tử. Giá thuê kho bãi và nhà xưởng tăng 10-15%, tỷ lệ lấp đầy các khu công nghiệp đạt trên 85%.</p>
    <h3>Phân tích theo từng phân khúc</h3>
    <ul>
      <li><strong>Nhà ở xã hội:</strong> Nhu cầu vẫn vượt xa nguồn cung. Chính phủ triển khai gói tín dụng 120.000 tỷ đồng hỗ trợ người mua nhà lần đầu.</li>
      <li><strong>Căn hộ trung cấp:</strong> Phân khúc hot nhất với nguồn cầu ổn định từ tầng lớp trung lưu đang gia tăng nhanh chóng.</li>
      <li><strong>Biệt thự, nhà phố cao cấp:</strong> Phục hồi chậm hơn, chủ yếu tập trung tại các dự án có vị trí đắc địa và pháp lý hoàn chỉnh.</li>
      <li><strong>BĐS nghỉ dưỡng:</strong> Hồi phục mạnh nhờ du lịch quốc tế tăng trưởng trở lại.</li>
      <li><strong>BĐS công nghiệp:</strong> "Ngôi sao" của thị trường với dòng vốn FDI đổ vào liên tục.</li>
    </ul>
    <h2>Tác động của hạ tầng giao thông</h2>
    <p>Các dự án hạ tầng giao thông lớn đang tạo ra "cơn sốt" bất động sản tại các khu vực xung quanh. Tuyến metro số 1 TP.HCM chính thức vận hành đã đẩy giá đất dọc tuyến tăng 30-50%. Cao tốc Bắc-Nam hoàn thành thêm nhiều đoạn mới, kết nối các vùng kinh tế trọng điểm.</p>
    <h2>Lời khuyên cho nhà đầu tư</h2>
    <p>Các chuyên gia khuyến nghị nhà đầu tư nên tập trung vào các dự án có pháp lý rõ ràng và vị trí có tiềm năng phát triển hạ tầng. Đặc biệt, cần cẩn trọng với các dự án "ma" chưa đủ điều kiện pháp lý nhưng rao bán tràn lan trên mạng xã hội.</p>
    <h3>5 nguyên tắc vàng khi đầu tư BĐS 2026</h3>
    <ul>
      <li>Kiểm tra kỹ pháp lý: sổ đỏ, giấy phép xây dựng, quy hoạch</li>
      <li>Ưu tiên vị trí gần hạ tầng giao thông công cộng</li>
      <li>Đánh giá uy tín chủ đầu tư qua các dự án đã hoàn thành</li>
      <li>Không vay quá 50% giá trị bất động sản</li>
      <li>Đầu tư dài hạn, tránh lướt sóng ngắn hạn trong giai đoạn thị trường chưa ổn định</li>
    </ul>`
  },
  {
    id: 8,
    title: 'Nghiên cứu mới: Vaccine mRNA thế hệ tiếp theo',
    excerpt: 'Công nghệ mRNA mở ra kỷ nguyên mới trong việc phòng chống nhiều loại bệnh.',
    category: 'khoa-hoc',
    author: 'Bùi Thị Lan',
    authorAvatar: 'https://ui-avatars.com/api/?name=Thi+Lan&background=a855f7&color=fff',
    date: '2026-03-03',
    readTime: 8,
    image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&q=80',
    featured: false,
    views: 8765,
    tags: ['Y tế', 'Vaccine', 'mRNA'],
    content: `<p>Các nhà khoa học đã phát triển thành công vaccine mRNA thế hệ mới có khả năng chống lại nhiều biến thể virus cùng lúc. Bước đột phá này được đánh giá là quan trọng nhất trong lĩnh vực y sinh học kể từ khi vaccine COVID-19 được phát triển thần tốc vào năm 2020, mở ra kỷ nguyên mới trong việc phòng chống dịch bệnh toàn cầu.</p>
    <h2>Cơ chế hoạt động</h2>
    <p>Vaccine mRNA thế hệ mới sử dụng cấu trúc vòng tròn (circular RNA) giúp tăng độ bền và hiệu quả gấp 3 lần so với thế hệ trước. Trong khi mRNA truyền thống bị phân hủy nhanh chóng trong cơ thể, cấu trúc vòng tròn giúp phân tử RNA tồn tại lâu hơn, sản xuất protein kháng nguyên liên tục trong 2-3 tuần thay vì chỉ vài ngày.</p>
    <p>Đặc biệt, vaccine mới sử dụng công nghệ "đa epitope" — mã hóa đồng thời nhiều đoạn protein từ các biến thể virus khác nhau trong một liều tiêm duy nhất. Điều này giúp hệ miễn dịch nhận diện và chống lại nhiều biến thể cùng lúc, giải quyết vấn đề virus liên tục đột biến.</p>
    <blockquote>Vaccine mRNA thế hệ 2 không chỉ là bản nâng cấp. Đó là sự thay đổi hoàn toàn cách chúng ta tiếp cận việc phòng bệnh — từ phản ứng theo sau virus sang chủ động đón trước mọi biến thể. — GS. Katalin Karikó, Giải Nobel Y sinh 2023</blockquote>
    <h2>Kết quả thử nghiệm lâm sàng</h2>
    <p>Thử nghiệm lâm sàng Pha 3 với 45.000 tình nguyện viên tại 12 quốc gia cho thấy kết quả vượt mong đợi:</p>
    <ul>
      <li>Hiệu quả phòng bệnh: 95.2% với biến thể hiện tại và 89.7% với các biến thể giả lập trong tương lai</li>
      <li>Tác dụng phụ: Nhẹ hơn đáng kể so với vaccine thế hệ 1, chỉ 12% bị sốt nhẹ (so với 35% trước đây)</li>
      <li>Thời gian bảo vệ: Kháng thể duy trì ở mức cao sau 12 tháng, gấp đôi thế hệ trước</li>
      <li>Bảo quản: Ổn định ở nhiệt độ tủ lạnh thường (2-8°C) trong 6 tháng, không cần đông sâu</li>
    </ul>
    <h2>Ứng dụng trong tương lai</h2>
    <p>Công nghệ này không chỉ dùng để phòng bệnh truyền nhiễm mà còn có tiềm năng trong điều trị ung thư và các bệnh di truyền. Các thử nghiệm vaccine mRNA cá nhân hóa cho bệnh nhân ung thư — được thiết kế riêng dựa trên đặc điểm di truyền của khối u mỗi người — đang cho kết quả rất hứa hẹn.</p>
    <h3>Các hướng nghiên cứu đang triển khai</h3>
    <ul>
      <li><strong>Vaccine ung thư:</strong> Moderna và BioNTech đang thử nghiệm Pha 2 với ung thư da, ung thư phổi và ung thư tụy</li>
      <li><strong>Bệnh tự miễn:</strong> mRNA có thể "huấn luyện" lại hệ miễn dịch để không tấn công cơ thể</li>
      <li><strong>Bệnh di truyền hiếm:</strong> Thay thế protein bị thiếu hoặc lỗi do đột biến gen</li>
      <li><strong>Vaccine "vạn năng" cho cúm:</strong> Một mũi tiêm bảo vệ chống tất cả các chủng cúm</li>
    </ul>
    <h2>Việt Nam và công nghệ mRNA</h2>
    <p>Việt Nam đang đẩy mạnh nghiên cứu và phát triển vaccine mRNA nội địa. Vingroup đã đầu tư 200 triệu USD xây dựng nhà máy sản xuất vaccine mRNA công suất 200 triệu liều/năm. Các trường đại học và viện nghiên cứu hàng đầu cũng đang đào tạo nhân lực chuyên sâu trong lĩnh vực này, với mục tiêu Việt Nam có thể tự chủ sản xuất vaccine mRNA vào năm 2028.</p>`
  },
  {
    id: 9,
    title: 'K-pop và sự ảnh hưởng toàn cầu trong thập kỷ mới',
    excerpt: 'Ngành công nghiệp K-pop tiếp tục mở rộng tầm ảnh hưởng trên toàn thế giới.',
    category: 'giai-tri',
    author: 'Hoàng Mai Anh',
    authorAvatar: 'https://ui-avatars.com/api/?name=Mai+Anh&background=ec4899&color=fff',
    date: '2026-03-02',
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
    featured: false,
    views: 22345,
    tags: ['K-pop', 'Âm nhạc', 'Văn hóa'],
    content: `<p>K-pop đã vượt ra khỏi biên giới Hàn Quốc để trở thành hiện tượng văn hóa toàn cầu, ảnh hưởng đến thời trang, ngôn ngữ và lối sống của giới trẻ khắp năm châu. Từ những sân vận động chật kín ở Mỹ đến các fan meeting tại Việt Nam, K-pop đã chứng minh rằng âm nhạc thực sự không có biên giới.</p>
    <h2>Con số ấn tượng</h2>
    <p>Doanh thu ngành K-pop năm 2025 đạt hơn 10 tỷ USD, với các nhóm nhạc liên tục lập kỷ lục về lượng stream và bán album. Riêng thị trường album vật lý — bao gồm CD, photocard và merchandise — đạt 2.5 tỷ USD, một con số đáng kinh ngạc trong thời đại streaming.</p>
    <ul>
      <li>Hơn 50 tỷ lượt stream K-pop trên Spotify trong năm 2025</li>
      <li>BTS và BLACKPINK vẫn là hai nghệ sĩ Hàn Quốc có lượng follower lớn nhất trên Instagram</li>
      <li>K-pop chiếm 15% tổng lượng stream nhạc toàn cầu, tăng từ 8% năm 2020</li>
      <li>Hơn 200 concert quy mô sân vận động được tổ chức trên toàn thế giới</li>
    </ul>
    <h2>Thế hệ nghệ sĩ mới</h2>
    <p>Năm 2026 chứng kiến sự bùng nổ của thế hệ K-pop thứ 5 với những nhóm nhạc mang phong cách hoàn toàn khác biệt. Các nhóm mới không chỉ hát và nhảy xuất sắc mà còn tham gia sáng tác, sản xuất và thậm chí xây dựng "thế giới quan" (worldview) riêng cho nhóm — một xu hướng được tiên phong bởi các nhóm nhạc SM Entertainment.</p>
    <blockquote>K-pop không chỉ là âm nhạc. Đó là một hệ sinh thái hoàn chỉnh bao gồm âm nhạc, thời trang, vũ đạo, nội dung số và cộng đồng fan — tất cả được kết nối bằng công nghệ và sáng tạo. — Giáo sư Lee Gyu-tag, Đại học George Mason Hàn Quốc</blockquote>
    <h2>Xu hướng mới trong K-pop 2026</h2>
    <p>Các nghệ sĩ K-pop ngày càng kết hợp nhiều thể loại nhạc khác nhau và mở rộng hoạt động sang các lĩnh vực như thời trang, mỹ phẩm và công nghệ. Sự kết hợp giữa K-pop với nhạc Latin, Afrobeats và nhạc truyền thống châu Á đang tạo nên những bản hit toàn cầu.</p>
    <h3>Công nghệ AI và Metaverse trong K-pop</h3>
    <p>Các công ty giải trí Hàn Quốc đang tiên phong trong việc sử dụng AI và metaverse. HYBE đã ra mắt nghệ sĩ ảo có thể biểu diễn live và tương tác với fan trong thời gian thực. SM Entertainment phát triển nền tảng metaverse KWANGYA cho phép fan tham gia concert ảo với trải nghiệm gần như thật.</p>
    <h2>K-pop tại Việt Nam</h2>
    <p>Việt Nam là một trong những thị trường K-pop lớn nhất Đông Nam Á. Cộng đồng fan K-pop Việt Nam ước tính có hơn 10 triệu người, với các fanclub được tổ chức bài bản và chuyên nghiệp. Nhiều concert K-pop tại Hà Nội và TP.HCM thu hút hàng chục nghìn khán giả và cháy vé trong vài phút.</p>
    <p>Đáng chú ý, nhiều nghệ sĩ Việt Nam đang học hỏi mô hình K-pop để phát triển sự nghiệp. Hệ thống đào tạo idol, chiến lược marketing trên mạng xã hội và cách xây dựng cộng đồng fan của K-pop đang được áp dụng rộng rãi trong V-pop.</p>`
  },
  {
    id: 10,
    title: 'Mindfulness: Nghệ thuật sống tỉnh thức mỗi ngày',
    excerpt: 'Cách thực hành mindfulness giúp giảm stress và cải thiện chất lượng cuộc sống.',
    category: 'doi-song',
    author: 'Trịnh Công Sơn',
    authorAvatar: 'https://ui-avatars.com/api/?name=Cong+Son&background=f97316&color=fff',
    date: '2026-03-01',
    readTime: 5,
    image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=800&q=80',
    featured: false,
    views: 6543,
    tags: ['Mindfulness', 'Sức khỏe tinh thần', 'Thiền'],
    content: `<p>Trong nhịp sống hối hả hiện đại, mindfulness — hay sống tỉnh thức — đang trở thành xu hướng được nhiều người quan tâm. Khi công nghệ ngày càng xâm nhập vào mọi khía cạnh cuộc sống, con người dần nhận ra rằng mình đang sống trên "chế độ tự động" — làm mọi thứ mà không thực sự hiện diện trong khoảnh khắc.</p>
    <h2>Mindfulness là gì?</h2>
    <p>Mindfulness là trạng thái chú ý đến hiện tại một cách có chủ đích, không phán xét. Đây là phương pháp đã được khoa học chứng minh hiệu quả trong giảm stress, lo âu và trầm cảm. Nguồn gốc của mindfulness bắt nguồn từ thiền Phật giáo hơn 2.500 năm trước, nhưng phiên bản hiện đại đã được "thế tục hóa" và ứng dụng rộng rãi trong y học và tâm lý học.</p>
    <p>GS. Jon Kabat-Zinn, người tiên phong đưa mindfulness vào y khoa phương Tây, đã phát triển chương trình MBSR (Mindfulness-Based Stress Reduction) vào năm 1979. Kể từ đó, hàng nghìn nghiên cứu đã xác nhận lợi ích của mindfulness đối với sức khỏe thể chất và tinh thần.</p>
    <blockquote>Mindfulness không phải là cách để thoát khỏi cuộc sống. Đó là cách để thực sự sống trong cuộc sống. — Thích Nhất Hạnh</blockquote>
    <h2>Lợi ích được khoa học chứng minh</h2>
    <ul>
      <li><strong>Giảm stress:</strong> Giảm cortisol (hormone stress) trung bình 23% sau 8 tuần thực hành</li>
      <li><strong>Cải thiện giấc ngủ:</strong> 65% người thực hành cho biết chất lượng giấc ngủ tốt hơn đáng kể</li>
      <li><strong>Tăng tập trung:</strong> Cải thiện khả năng chú ý và trí nhớ ngắn hạn lên đến 14%</li>
      <li><strong>Giảm đau mãn tính:</strong> Hiệu quả tương đương một số loại thuốc giảm đau</li>
      <li><strong>Tăng cường hệ miễn dịch:</strong> Tăng sản xuất kháng thể sau tiêm vaccine</li>
      <li><strong>Cải thiện sức khỏe tim mạch:</strong> Giảm huyết áp và nhịp tim nghỉ</li>
    </ul>
    <h2>Cách thực hành đơn giản</h2>
    <p>Bạn có thể bắt đầu với 5 phút thiền mỗi sáng, tập trung vào hơi thở và quan sát suy nghĩ mà không phán xét. Không cần ngồi xếp bằng hay tìm không gian yên tĩnh tuyệt đối — bạn có thể thực hành mindfulness mọi lúc, mọi nơi.</p>
    <h3>Bài tập cho người mới bắt đầu</h3>
    <p><strong>Thiền hơi thở (5 phút):</strong> Ngồi thoải mái, nhắm mắt, tập trung vào hơi thở vào-ra. Khi tâm trí lang thang (và nó sẽ lang thang), nhẹ nhàng đưa sự chú ý trở lại hơi thở. Không tự phán xét mình.</p>
    <p><strong>Ăn tỉnh thức:</strong> Thay vì vừa ăn vừa xem điện thoại, hãy dành một bữa ăn hoàn toàn tập trung vào thức ăn — màu sắc, mùi vị, kết cấu, cảm giác khi nhai. Bạn sẽ ngạc nhiên khi thấy bữa ăn trở nên ngon hơn bao nhiêu.</p>
    <p><strong>Đi bộ tỉnh thức:</strong> Đi bộ chậm rãi, chú ý đến từng bước chân chạm đất, cảm nhận gió trên da, nghe âm thanh xung quanh. Đây là cách tuyệt vời để "reset" tâm trí giữa ngày làm việc.</p>
    <h2>Mindfulness trong công sở</h2>
    <p>Nhiều công ty lớn như Google, Apple, Nike và Samsung đã đưa mindfulness vào chương trình phúc lợi nhân viên. Google có chương trình "Search Inside Yourself" nổi tiếng, đào tạo mindfulness cho hàng nghìn nhân viên mỗi năm. Tại Việt Nam, ngày càng nhiều doanh nghiệp công nghệ bắt đầu áp dụng "phút thiền trước họp" và phòng thiền trong văn phòng.</p>
    <h2>Ứng dụng công nghệ hỗ trợ</h2>
    <p>Các ứng dụng như Calm, Headspace và Insight Timer đang giúp hàng triệu người tiếp cận mindfulness dễ dàng hơn. Tại Việt Nam, ứng dụng thiền tiếng Việt "Fonos" và "Lala" cũng đang phát triển nhanh chóng với nội dung được thiết kế phù hợp với văn hóa và ngôn ngữ Việt.</p>`
  },
  {
    id: 11,
    title: 'Xe điện tự lái: Cuộc cách mạng giao thông đô thị',
    excerpt: 'Công nghệ xe tự lái đang thay đổi diện mạo giao thông tại các thành phố lớn.',
    category: 'cong-nghe',
    author: 'Lý Quốc Việt',
    authorAvatar: 'https://ui-avatars.com/api/?name=Quoc+Viet&background=3b82f6&color=fff',
    date: '2026-02-28',
    readTime: 7,
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80',
    featured: false,
    views: 13456,
    tags: ['Xe điện', 'Tự lái', 'Giao thông'],
    content: `<p>Xe điện tự lái đang dần trở thành hiện thực tại nhiều thành phố lớn trên thế giới, hứa hẹn thay đổi hoàn toàn cách chúng ta di chuyển. Năm 2026, dịch vụ robotaxi đã hoạt động thương mại tại hơn 30 thành phố trên toàn cầu, phục vụ hàng triệu chuyến đi mỗi ngày mà không cần tài xế con người.</p>
    <h2>Tiến bộ công nghệ vượt bậc</h2>
    <p>Các hệ thống cảm biến LiDAR và AI đã đạt đến mức có thể xử lý hầu hết các tình huống giao thông phức tạp trong đô thị. Thế hệ chip AI mới nhất có thể xử lý 500 nghìn tỷ phép tính mỗi giây, cho phép xe phản ứng trong 0.01 giây — nhanh gấp 10 lần so với con người.</p>
    <p>Tesla, Waymo và BYD là ba công ty dẫn đầu cuộc đua. Tesla với hệ thống Full Self-Driving (FSD) V13 sử dụng hoàn toàn camera và AI, trong khi Waymo kết hợp LiDAR, radar và camera. BYD của Trung Quốc đang nổi lên như "ngựa ô" với giải pháp tự lái giá rẻ cho thị trường đại chúng.</p>
    <blockquote>Xe tự lái không chỉ là tiện ích — đó là cách cứu mạng người. Mỗi năm có 1.35 triệu người chết vì tai nạn giao thông, và 94% là do lỗi con người. Xe tự lái có thể giảm con số này xuống gần bằng không. — Elon Musk, CEO Tesla</blockquote>
    <h2>Các cấp độ tự lái</h2>
    <ul>
      <li><strong>Level 1-2:</strong> Hỗ trợ lái — cruise control thông minh, giữ làn đường (phổ biến hiện nay)</li>
      <li><strong>Level 3:</strong> Tự lái có điều kiện — xe tự lái trong một số tình huống, tài xế sẵn sàng can thiệp</li>
      <li><strong>Level 4:</strong> Tự lái cao cấp — xe tự lái hoàn toàn trong khu vực xác định (robotaxi 2026)</li>
      <li><strong>Level 5:</strong> Tự lái hoàn toàn — xe tự lái mọi lúc, mọi nơi, mọi điều kiện (mục tiêu 2030+)</li>
    </ul>
    <h2>Tác động đến đô thị</h2>
    <p>Xe tự lái hứa hẹn thay đổi diện mạo đô thị. Khi mọi người không cần sở hữu xe riêng, nhu cầu bãi đỗ xe giảm mạnh — giải phóng hàng triệu mét vuông đất đô thị cho công viên, nhà ở và không gian công cộng. Giao thông sẽ trôi chảy hơn khi xe tự lái giao tiếp với nhau, loại bỏ tắc nghẽn do hành vi lái xe không hiệu quả.</p>
    <h2>Thách thức còn lại</h2>
    <p>Dù công nghệ đã sẵn sàng, việc triển khai đại trà vẫn gặp nhiều thách thức về quy định pháp lý, hạ tầng và niềm tin của người dùng. Câu hỏi "ai chịu trách nhiệm khi xe tự lái gây tai nạn?" vẫn chưa có câu trả lời thống nhất trên toàn cầu.</p>
    <h3>Bài toán đạo đức</h3>
    <p>"Bài toán xe điện" (Trolley Problem) phiên bản hiện đại đặt ra câu hỏi: trong tình huống không thể tránh tai nạn, xe tự lái nên ưu tiên bảo vệ hành khách hay người đi bộ? Các nhà đạo đức học, kỹ sư và nhà lập pháp đang tranh luận sôi nổi về vấn đề này.</p>
    <h2>Triển vọng tại Việt Nam</h2>
    <p>VinFast đã thử nghiệm xe tự lái Level 3 tại Hải Phòng và có kế hoạch triển khai dịch vụ robotaxi tại Hà Nội vào cuối năm 2027. Tuy nhiên, giao thông Việt Nam với đặc thù xe máy đông đúc và hành vi giao thông phức tạp đặt ra thách thức riêng mà các thuật toán tự lái cần phải giải quyết.</p>`
  },
  {
    id: 12,
    title: 'Kinh tế số Việt Nam: Mục tiêu 50 tỷ USD vào 2026',
    excerpt: 'Việt Nam đang đẩy mạnh chuyển đổi số để đạt mục tiêu kinh tế số tham vọng.',
    category: 'kinh-doanh',
    author: 'Đặng Văn Lâm',
    authorAvatar: 'https://ui-avatars.com/api/?name=Van+Lam&background=22c55e&color=fff',
    date: '2026-02-27',
    readTime: 8,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    featured: false,
    views: 10234,
    tags: ['Kinh tế số', 'Chuyển đổi số', 'Việt Nam'],
    content: `<p>Chính phủ Việt Nam đặt mục tiêu kinh tế số đóng góp 30% GDP vào năm 2030, với cột mốc quan trọng 50 tỷ USD vào cuối năm 2026. Theo báo cáo e-Conomy SEA của Google, Temasek và Bain, kinh tế số Việt Nam là một trong những thị trường tăng trưởng nhanh nhất khu vực Đông Nam Á với tốc độ 20-25%/năm.</p>
    <h2>Bức tranh kinh tế số Việt Nam 2026</h2>
    <p>Kinh tế số Việt Nam hiện đóng góp khoảng 20% GDP, với giá trị ước tính 45 tỷ USD vào cuối năm 2025. Con số này được dự kiến vượt mốc 50 tỷ USD vào cuối 2026, đưa Việt Nam trở thành nền kinh tế số lớn thứ hai Đông Nam Á, chỉ sau Indonesia.</p>
    <blockquote>Chuyển đổi số không phải là lựa chọn mà là con đường bắt buộc. Doanh nghiệp nào không chuyển đổi số sẽ bị tụt lại phía sau và cuối cùng bị đào thải. — Bộ trưởng Bộ TT&TT</blockquote>
    <h2>Động lực tăng trưởng</h2>
    <p>Thương mại điện tử, fintech và giáo dục trực tuyến là ba trụ cột chính thúc đẩy tăng trưởng kinh tế số. Mỗi lĩnh vực đều có tốc độ tăng trưởng ấn tượng:</p>
    <ul>
      <li><strong>Thương mại điện tử:</strong> Đạt 23 tỷ USD, tăng 25% so với 2025. Shopee, Lazada và TikTok Shop chiếm 80% thị phần.</li>
      <li><strong>Fintech:</strong> Thanh toán không tiền mặt chiếm 50% tổng giao dịch. Ví điện tử MoMo, ZaloPay, VNPay phục vụ hơn 60 triệu người dùng.</li>
      <li><strong>Giáo dục trực tuyến (EdTech):</strong> Thị trường đạt 3 tỷ USD với các nền tảng như Manabie, Vuihoc và TopCV.</li>
      <li><strong>Y tế số (HealthTech):</strong> Telemedicine và ứng dụng sức khỏe phát triển nhanh chóng sau đại dịch.</li>
      <li><strong>Kinh tế chia sẻ:</strong> Grab, Be, Gojek tiếp tục mở rộng dịch vụ.</li>
    </ul>
    <h2>Chuyển đổi số trong khu vực công</h2>
    <p>Chính phủ điện tử đang được đẩy mạnh với mục tiêu 100% dịch vụ công trực tuyến mức độ 4. Ứng dụng VNeID đã có hơn 50 triệu tài khoản, trở thành "siêu ứng dụng" quốc gia tích hợp CCCD, bảo hiểm y tế và nhiều dịch vụ công khác. Cơ sở dữ liệu dân cư quốc gia với 100 triệu hồ sơ đang phát huy hiệu quả trong việc đơn giản hóa thủ tục hành chính.</p>
    <h2>Cơ hội cho doanh nghiệp</h2>
    <p>Các doanh nghiệp vừa và nhỏ có cơ hội tiếp cận thị trường rộng lớn hơn thông qua chuyển đổi số. Một cửa hàng nhỏ ở vùng nông thôn giờ đây có thể bán hàng cho khách hàng ở TP.HCM thông qua livestream trên TikTok. Một nông dân Đà Lạt có thể xuất khẩu rau sạch sang Singapore qua sàn thương mại điện tử xuyên biên giới.</p>
    <h3>Thách thức cần vượt qua</h3>
    <ul>
      <li>Thiếu hụt nhân lực CNTT: Cần thêm 500.000 kỹ sư phần mềm đến năm 2030</li>
      <li>An ninh mạng: Số vụ tấn công mạng tăng 30%/năm</li>
      <li>Khoảng cách số giữa thành thị và nông thôn</li>
      <li>Khung pháp lý cho kinh tế số còn chưa hoàn thiện</li>
    </ul>
    <h2>Tầm nhìn 2030</h2>
    <p>Với lộ trình chuyển đổi số quốc gia, Việt Nam hướng đến trở thành trung tâm đổi mới sáng tạo của Đông Nam Á. Mục tiêu kinh tế số đóng góp 30% GDP vào năm 2030 là tham vọng nhưng khả thi, nếu cả Chính phủ, doanh nghiệp và người dân cùng chung tay hành động.</p>`
  },
  {
    id: 13,
    title: 'Năng lượng tái tạo: Việt Nam dẫn đầu Đông Nam Á',
    excerpt: 'Việt Nam trở thành quốc gia có công suất điện mặt trời lớn nhất khu vực.',
    category: 'khoa-hoc',
    author: 'Ngô Thị Mai',
    authorAvatar: 'https://ui-avatars.com/api/?name=Thi+Mai&background=a855f7&color=fff',
    date: '2026-02-26',
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
    featured: false,
    views: 7890,
    tags: ['Năng lượng', 'Điện mặt trời', 'Môi trường'],
    content: `<p>Với hơn 20 GW công suất lắp đặt, Việt Nam hiện là quốc gia dẫn đầu Đông Nam Á về năng lượng mặt trời. Thành tựu này là kết quả của chính sách khuyến khích đầu tư mạnh mẽ, vị trí địa lý thuận lợi và sự tham gia tích cực của cả khu vực tư nhân lẫn quốc tế.</p>
    <h2>Bức tranh năng lượng tái tạo Việt Nam</h2>
    <p>Tính đến đầu năm 2026, năng lượng tái tạo đóng góp khoảng 30% tổng công suất phát điện của Việt Nam, trong đó điện mặt trời chiếm 20 GW, điện gió 8 GW và thủy điện nhỏ 4 GW. Đây là bước tiến ấn tượng so với chỉ 5 năm trước, khi năng lượng tái tạo chỉ chiếm chưa đến 10% tổng công suất.</p>
    <ul>
      <li>Điện mặt trời: 20 GW (tăng gấp 4 lần từ 2020)</li>
      <li>Điện gió trên bờ: 5 GW</li>
      <li>Điện gió ngoài khơi: 3 GW (dự án đầu tiên vận hành 2025)</li>
      <li>Tổng đầu tư vào năng lượng tái tạo: hơn 25 tỷ USD</li>
    </ul>
    <h2>Tiềm năng phát triển</h2>
    <p>Việt Nam có vị trí địa lý thuận lợi với số giờ nắng cao, đặc biệt ở các tỉnh miền Trung và miền Nam. Ninh Thuận và Bình Thuận được mệnh danh là "thủ đô năng lượng mặt trời" với cường độ bức xạ trung bình 5.0-5.5 kWh/m²/ngày, ngang ngửa với các sa mạc ở Trung Đông.</p>
    <blockquote>Việt Nam có tiềm năng năng lượng tái tạo thuộc hàng tốt nhất Đông Nam Á. Nếu khai thác đúng cách, Việt Nam có thể trở thành nhà xuất khẩu năng lượng sạch cho cả khu vực. — Báo cáo Ngân hàng Thế giới 2025</blockquote>
    <h2>Điện gió ngoài khơi: Biên giới mới</h2>
    <p>Điện gió ngoài khơi đang là lĩnh vực được kỳ vọng nhất. Với đường bờ biển dài hơn 3.200 km và tốc độ gió trung bình 7-9 m/s, Việt Nam có tiềm năng điện gió ngoài khơi lên đến 600 GW — đủ để cung cấp điện cho cả Đông Nam Á. Nhiều tập đoàn quốc tế như Orsted (Đan Mạch), Equinor (Na Uy) và Copenhagen Infrastructure Partners đã ký thỏa thuận hợp tác phát triển.</p>
    <h2>Thách thức</h2>
    <p>Lưới điện cần được nâng cấp để đáp ứng nguồn năng lượng tái tạo ngày càng tăng và giải quyết vấn đề lưu trữ năng lượng. Hiện tượng "cắt giảm công suất" — buộc các nhà máy điện mặt trời giảm sản lượng vì lưới không tiếp nhận hết — vẫn xảy ra thường xuyên, gây lãng phí nguồn lực.</p>
    <h3>Giải pháp lưu trữ năng lượng</h3>
    <p>Pin lưu trữ quy mô lớn đang được triển khai để giải quyết vấn đề gián đoạn của năng lượng tái tạo. Giá pin lithium-ion đã giảm 90% trong thập kỷ qua, và công nghệ pin thể rắn (solid-state) hứa hẹn sẽ mang lại cuộc cách mạng tiếp theo trong lưu trữ năng lượng.</p>
    <h2>Cam kết Net Zero 2050</h2>
    <p>Tại COP26, Việt Nam cam kết đạt phát thải ròng bằng không vào năm 2050. Để hiện thực hóa cam kết này, năng lượng tái tạo cần chiếm 70% tổng công suất phát điện vào năm 2045. Đây là mục tiêu đầy tham vọng nhưng cần thiết, không chỉ vì biến đổi khí hậu mà còn vì cơ hội kinh tế to lớn mà quá trình chuyển đổi năng lượng mang lại.</p>`
  },
  {
    id: 14,
    title: 'Gaming Việt Nam: Từ giải trí đến thể thao điện tử chuyên nghiệp',
    excerpt: 'Esports tại Việt Nam đang phát triển mạnh mẽ với những đội tuyển tầm cỡ quốc tế.',
    category: 'giai-tri',
    author: 'Cao Bá Quát',
    authorAvatar: 'https://ui-avatars.com/api/?name=Ba+Quat&background=ec4899&color=fff',
    date: '2026-02-25',
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80',
    featured: false,
    views: 16789,
    tags: ['Gaming', 'Esports', 'Thể thao điện tử'],
    content: `<p>Thể thao điện tử tại Việt Nam đã chuyển mình từ hoạt động giải trí sang ngành công nghiệp chuyên nghiệp với doanh thu hàng trăm triệu USD. Từ những quán net bụi bặm đến những đấu trường esports hiện đại hàng nghìn chỗ ngồi, gaming Việt Nam đã trải qua hành trình đáng kinh ngạc chỉ trong một thập kỷ.</p>
    <h2>Đội tuyển Việt Nam trên đấu trường quốc tế</h2>
    <p>Các đội tuyển Việt Nam đã giành nhiều thành tích đáng tự hào tại các giải đấu quốc tế, đặc biệt trong các tựa game MOBA và FPS. Đội tuyển Liên Minh Huyền Thoại: Tốc Chiến Việt Nam liên tục nằm trong top 4 thế giới, trong khi đội tuyển PUBG Mobile gây ấn tượng mạnh với chức vô địch Đông Nam Á 3 năm liên tiếp.</p>
    <h3>Thành tích nổi bật 2025-2026</h3>
    <ul>
      <li>Huy chương vàng Esports tại SEA Games 33 ở Thái Lan</li>
      <li>Top 4 thế giới Valorant Champions Tour 2025</li>
      <li>Vô địch giải đấu Free Fire World Series lần thứ 2</li>
      <li>Đại diện Việt Nam lọt vào chung kết League of Legends Worlds lần đầu tiên</li>
    </ul>
    <blockquote>Esports Việt Nam đã chứng minh rằng chúng ta không thua kém bất kỳ quốc gia nào trên thế giới. Thế hệ game thủ trẻ Việt Nam có tài năng, có đam mê và có quyết tâm vươn tới đỉnh cao. — Trưởng đoàn Esports Việt Nam</blockquote>
    <h2>Hệ sinh thái esports chuyên nghiệp</h2>
    <p>Ngành esports Việt Nam năm 2026 có doanh thu ước tính 250 triệu USD, bao gồm tiền thưởng giải đấu, tài trợ, bán vé, streaming và merchandise. Các tổ chức esports chuyên nghiệp như GAM, Team Flash, SBTC đã xây dựng gaming house hiện đại với chế độ dinh dưỡng, thể lực và tâm lý chuyên nghiệp cho tuyển thủ.</p>
    <p>Các nhà tài trợ lớn như Samsung, Mercedes-Benz và Coca-Cola đã rót hàng triệu USD vào các giải đấu esports Việt Nam, cho thấy sự công nhận từ giới kinh doanh đối với tiềm năng tiếp cận khán giả trẻ của esports.</p>
    <h2>Cơ hội nghề nghiệp</h2>
    <p>Ngành esports không chỉ dành cho game thủ mà còn tạo ra nhiều cơ hội cho streamer, caster, huấn luyện viên và nhà quản lý. Ước tính có hơn 50.000 người đang làm việc toàn thời gian trong ngành gaming và esports tại Việt Nam.</p>
    <h3>Các vị trí nghề nghiệp trong esports</h3>
    <ul>
      <li><strong>Pro player:</strong> Thu nhập top đầu có thể đạt 500 triệu - 2 tỷ đồng/năm</li>
      <li><strong>Streamer/Content Creator:</strong> Thu nhập từ streaming, quảng cáo và tài trợ</li>
      <li><strong>Caster/Bình luận viên:</strong> Nghề nghiệp đang rất khan hiếm nhân lực chất lượng</li>
      <li><strong>Coach/Analyst:</strong> Huấn luyện viên và phân tích chiến thuật chuyên nghiệp</li>
      <li><strong>Event Manager:</strong> Tổ chức giải đấu và sự kiện esports</li>
      <li><strong>Game Developer:</strong> Phát triển game — ngành công nghiệp trị giá hàng tỷ USD</li>
    </ul>
    <h2>Đào tạo esports trong trường học</h2>
    <p>Nhiều trường đại học và cao đẳng tại Việt Nam đã mở ngành đào tạo esports và game design. Đại học FPT, Đại học RMIT và Arena Multimedia đều có chương trình đào tạo chuyên sâu. Một số trường cấp 3 tại Hà Nội và TP.HCM đã thành lập câu lạc bộ esports chính thức, giúp học sinh phát triển đam mê một cách lành mạnh.</p>
    <h2>Thách thức và tương lai</h2>
    <p>Dù phát triển mạnh, ngành esports Việt Nam vẫn đối mặt với một số thách thức: định kiến xã hội về gaming, vấn đề sức khỏe của game thủ chuyên nghiệp (hội chứng ống cổ tay, vấn đề thị lực), và tuổi nghề ngắn của pro player. Tuy nhiên, với sự đầu tư ngày càng lớn và sự công nhận từ xã hội, tương lai esports Việt Nam rất đáng kỳ vọng.</p>`
  },
  {
    id: 15,
    title: 'Xu hướng ẩm thực 2026: Fusion food Việt Nam chinh phục thế giới',
    excerpt: 'Ẩm thực Việt Nam kết hợp phong cách quốc tế tạo nên trào lưu mới.',
    category: 'doi-song',
    author: 'Phan Thị Ngọc',
    authorAvatar: 'https://ui-avatars.com/api/?name=Thi+Ngoc&background=f97316&color=fff',
    date: '2026-02-24',
    readTime: 5,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
    featured: false,
    views: 9123,
    tags: ['Ẩm thực', 'Fusion food', 'Văn hóa'],
    content: `<p>Fusion food — sự kết hợp giữa ẩm thực truyền thống Việt Nam với kỹ thuật nấu ăn quốc tế — đang trở thành xu hướng hot trên toàn thế giới. Từ New York đến Tokyo, từ London đến Sydney, hương vị Việt Nam đang chinh phục những thực khách khó tính nhất thông qua sự sáng tạo không giới hạn của các đầu bếp tài năng.</p>
    <h2>Tại sao ẩm thực Việt Nam lại phù hợp với fusion?</h2>
    <p>Ẩm thực Việt Nam vốn đã là sự pha trộn của nhiều nền văn hóa — ảnh hưởng Trung Hoa ở miền Bắc, ảnh hưởng Pháp trong bánh mì và cà phê, hương vị Chăm-pa ở miền Trung. Sự đa dạng này tạo nền tảng tuyệt vời cho fusion food. Thêm vào đó, triết lý cân bằng ngũ vị (chua, cay, mặn, ngọt, đắng) và sự phong phú của rau thơm Việt Nam là "nguyên liệu vàng" cho mọi sự kết hợp.</p>
    <blockquote>Ẩm thực Việt Nam giống như một bản giao hưởng — mỗi nguyên liệu là một nốt nhạc, và khi kết hợp đúng cách, tạo nên bản nhạc hoàn hảo. Fusion food chỉ là thêm một vài nhạc cụ mới vào dàn nhạc đã sẵn xuất sắc. — Chef Peter Cuong Franklin, nhà hàng Anan Saigon</blockquote>
    <h2>Những món ăn nổi bật</h2>
    <p>Phở burger, bánh mì sushi, và bún chả taco là những ví dụ điển hình cho sự sáng tạo không giới hạn của fusion food Việt Nam. Nhưng đó chỉ là phần nổi của tảng băng:</p>
    <ul>
      <li><strong>Phở risotto:</strong> Cơm Ý nấu với nước dùng phở, quế và hồi, phủ thịt bò tái và rau thơm</li>
      <li><strong>Bánh xèo taco:</strong> Vỏ bánh xèo giòn thay cho vỏ taco, nhân tôm, giá đỗ và rau sống</li>
      <li><strong>Cà phê sữa đá tiramisu:</strong> Bánh tiramisu với cà phê phin Việt Nam và sữa đặc</li>
      <li><strong>Nem cuốn temaki:</strong> Nem cuốn phong cách temaki Nhật với nước mắm wasabi</li>
      <li><strong>Bún bò tartare:</strong> Thịt bò tái kiểu Pháp kết hợp gia vị bún bò Huế</li>
    </ul>
    <h2>Nhà hàng Việt trên bản đồ ẩm thực thế giới</h2>
    <p>Ngày càng nhiều nhà hàng Việt Nam được vinh danh trong các bảng xếp hạng ẩm thực quốc tế uy tín. Anan Saigon lọt vào danh sách Asia's 50 Best Restaurants hai năm liên tiếp. Tại Paris, nhà hàng "Phở Saint-Germain" của đầu bếp gốc Việt đạt 1 sao Michelin — lần đầu tiên cho một nhà hàng phục vụ ẩm thực Việt Nam.</p>
    <h3>Đầu bếp Việt Nam nổi tiếng thế giới</h3>
    <p>Một thế hệ đầu bếp Việt Nam mới đang nổi lên trên trường quốc tế. Họ được đào tạo tại các trường ẩm thực hàng đầu thế giới nhưng quay về Việt Nam để sáng tạo với nguyên liệu và hương vị quê hương. Sự kết hợp giữa kỹ thuật phương Tây và hồn ẩm thực Việt tạo nên những tác phẩm ẩm thực độc đáo.</p>
    <h2>Ẩm thực đường phố Việt Nam: Di sản phi vật thể</h2>
    <p>Trong khi fusion food phát triển mạnh, ẩm thực đường phố truyền thống Việt Nam vẫn giữ vị trí đặc biệt. Phở, bánh mì, bún chả, cơm tấm — những món ăn bình dị này đang được CNN, Netflix và BBC liên tục giới thiệu đến khán giả toàn cầu. Năm 2025, phở và bánh mì Việt Nam được UNESCO xem xét đưa vào danh sách di sản văn hóa phi vật thể.</p>
    <h2>Xu hướng ẩm thực 2026</h2>
    <p>Ngoài fusion food, các xu hướng ẩm thực khác đang nổi lên tại Việt Nam bao gồm: ẩm thực thực vật (plant-based), nấu ăn bền vững với nguyên liệu địa phương (farm-to-table), và ẩm thực trải nghiệm (experiential dining) kết hợp ẩm thực với nghệ thuật và công nghệ. Tất cả đều hứa hẹn một năm đầy thú vị cho những người yêu ẩm thực.</p>`
  },
  {
    id: 16,
    title: 'Metaverse: Thế giới ảo và cơ hội kinh doanh mới',
    excerpt: 'Metaverse đang mở ra những cơ hội kinh doanh chưa từng có trong không gian số.',
    category: 'cong-nghe',
    author: 'Trần Đức Minh',
    authorAvatar: 'https://ui-avatars.com/api/?name=Duc+Minh&background=3b82f6&color=fff',
    date: '2026-02-23',
    readTime: 9,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
    featured: false,
    views: 11567,
    tags: ['Metaverse', 'VR', 'Thế giới ảo'],
    content: `<p>Metaverse — thế giới ảo 3D nơi người dùng có thể tương tác, làm việc và giải trí — đang dần trở thành hiện thực với sự đầu tư khổng lồ từ các tập đoàn công nghệ. Sau giai đoạn "hype" quá mức vào 2021-2022 và sự "tỉnh ngộ" vào 2023-2024, metaverse năm 2026 đã tìm được hướng đi thực tế và bền vững hơn.</p>
    <h2>Metaverse 2026: Thực tế hơn kỳ vọng ban đầu</h2>
    <p>Thay vì một thế giới ảo duy nhất như trong phim "Ready Player One", metaverse 2026 là tập hợp nhiều không gian ảo chuyên biệt phục vụ các mục đích khác nhau. Apple Vision Pro 2, Meta Quest 4 và các thiết bị AR/VR thế hệ mới đã đạt mức giá và chất lượng đủ để thu hút người dùng đại chúng.</p>
    <blockquote>Metaverse không phải là một điểm đến. Đó là sự tiến hóa của Internet — từ 2D sang 3D, từ xem sang trải nghiệm, từ thụ động sang chủ động. — Tim Sweeney, CEO Epic Games</blockquote>
    <h2>Ứng dụng trong kinh doanh</h2>
    <p>Từ showroom ảo đến hội nghị trực tuyến, metaverse đang thay đổi cách doanh nghiệp tương tác với khách hàng. Các ứng dụng thực tế nhất hiện nay bao gồm:</p>
    <ul>
      <li><strong>Đào tạo nhân viên:</strong> Walmart, Boeing sử dụng VR để đào tạo nhân viên với chi phí giảm 40% và hiệu quả tăng 75%</li>
      <li><strong>Thiết kế sản phẩm:</strong> BMW, Nike thiết kế và thử nghiệm sản phẩm trong không gian ảo trước khi sản xuất thực</li>
      <li><strong>Họp và cộng tác:</strong> Microsoft Mesh và Meta Horizon Workrooms thay thế Zoom cho các cuộc họp nhóm</li>
      <li><strong>Showroom ảo:</strong> Khách hàng "thử" nội thất trong nhà mình, "lái thử" xe hơi từ sofa</li>
      <li><strong>Du lịch ảo:</strong> "Tham quan" khách sạn, điểm đến trước khi đặt tour</li>
    </ul>
    <h2>Giáo dục trong Metaverse</h2>
    <p>Giáo dục là lĩnh vực metaverse phát huy hiệu quả rõ rệt nhất. Học sinh có thể "du hành" về La Mã cổ đại trong giờ Lịch sử, "đi vào" tế bào người trong giờ Sinh học, hay "thí nghiệm" phản ứng hóa học nguy hiểm trong môi trường an toàn. Nghiên cứu cho thấy học tập qua trải nghiệm VR giúp ghi nhớ kiến thức tốt hơn 230% so với phương pháp truyền thống.</p>
    <h2>Thị trường bất động sản ảo</h2>
    <p>Đất ảo trong metaverse đã trở thành một lớp tài sản đầu tư mới, với nhiều giao dịch lên đến hàng triệu USD. Tuy nhiên, sau cơn sốt ban đầu, thị trường đã điều chỉnh mạnh. Giá đất ảo trên Decentraland và The Sandbox giảm 80-90% so với đỉnh. Bài học: bất động sản ảo chỉ có giá trị khi có người sử dụng thực sự.</p>
    <h3>Kinh tế sáng tạo trong Metaverse</h3>
    <p>Mô hình kinh tế bền vững hơn trong metaverse là kinh tế sáng tạo — nơi các nhà thiết kế tạo ra quần áo ảo, phụ kiện, không gian và trải nghiệm để bán cho người dùng. Thị trường thời trang ảo đạt 5 tỷ USD năm 2025, với Gucci, Louis Vuitton và Nike là những thương hiệu tiên phong.</p>
    <h2>Thách thức và triển vọng</h2>
    <p>Metaverse vẫn đối mặt với nhiều thách thức: chi phí thiết bị, vấn đề say VR (motion sickness), quyền riêng tư dữ liệu và nguy cơ nghiện thế giới ảo. Tuy nhiên, với sự cải thiện liên tục của công nghệ và giá thành, dự kiến đến năm 2030, metaverse sẽ trở thành phần không thể thiếu trong cuộc sống hàng ngày — không phải thay thế thế giới thực, mà bổ sung cho nó.</p>`
  },
  {
    id: 17,
    title: 'Du lịch bền vững: Cách khám phá thế giới có trách nhiệm',
    excerpt: 'Xu hướng du lịch bền vững đang thay đổi cách chúng ta khám phá thế giới.',
    category: 'doi-song',
    author: 'Lê Thị Hồng',
    authorAvatar: 'https://ui-avatars.com/api/?name=Thi+Hong&background=f97316&color=fff',
    date: '2026-02-22',
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80',
    featured: false,
    views: 8456,
    tags: ['Du lịch', 'Bền vững', 'Môi trường'],
    content: `<p>Du lịch bền vững không chỉ là xu hướng mà đang trở thành tiêu chuẩn mới trong ngành du lịch toàn cầu. Theo Tổ chức Du lịch Thế giới (UNWTO), ngành du lịch chiếm 8% lượng phát thải carbon toàn cầu và tạo ra 4.5 tỷ tấn rác thải mỗi năm. Thực trạng này buộc ngành phải thay đổi để tồn tại.</p>
    <h2>Nguyên tắc du lịch bền vững</h2>
    <p>Giảm thiểu tác động môi trường, tôn trọng văn hóa địa phương và đóng góp cho kinh tế cộng đồng là ba trụ cột chính. Du lịch bền vững không có nghĩa là từ bỏ sự thoải mái — mà là du lịch một cách thông minh hơn, có ý thức hơn về tác động của mình.</p>
    <h3>7 nguyên tắc vàng cho du khách có trách nhiệm</h3>
    <ul>
      <li>Chọn phương tiện di chuyển thân thiện môi trường khi có thể (tàu hỏa thay vì máy bay cho quãng ngắn)</li>
      <li>Ở tại các cơ sở lưu trú có chứng nhận bền vững hoặc homestay địa phương</li>
      <li>Mua sắm và ăn uống tại các cơ sở địa phương thay vì chuỗi quốc tế</li>
      <li>Mang theo bình nước tái sử dụng, túi vải và ống hút inox</li>
      <li>Tôn trọng văn hóa, phong tục và trang phục truyền thống địa phương</li>
      <li>Không mua sản phẩm từ động vật hoang dã hoặc tham gia các hoạt động bóc lột động vật</li>
      <li>Bù đắp carbon cho các chuyến bay thông qua các chương trình carbon offset</li>
    </ul>
    <blockquote>Chúng ta không thừa kế Trái Đất từ cha mẹ, mà mượn nó từ con cháu. Du lịch bền vững là cách để đảm bảo thế hệ sau vẫn có thể khám phá vẻ đẹp của hành tinh này. — David Attenborough</blockquote>
    <h2>Điểm đến xanh tại Việt Nam</h2>
    <p>Nhiều điểm đến tại Việt Nam đang chuyển đổi sang mô hình du lịch bền vững, từ homestay sinh thái đến tour trải nghiệm văn hóa địa phương. Việt Nam có lợi thế lớn với đa dạng sinh học phong phú, 33 Vườn Quốc gia và hàng trăm di sản văn hóa.</p>
    <h3>Top điểm đến du lịch bền vững tại Việt Nam</h3>
    <ul>
      <li><strong>Cát Bà, Hải Phòng:</strong> Khu dự trữ sinh quyển UNESCO, phát triển du lịch sinh thái bảo tồn voọc Cát Bà</li>
      <li><strong>Hội An:</strong> Mô hình "thành phố không rác thải" với các tour đạp xe, nấu ăn và làng nghề truyền thống</li>
      <li><strong>Sapa:</strong> Homestay cộng đồng do người H'Mông, Dao vận hành, du khách trải nghiệm đời sống bản địa thực sự</li>
      <li><strong>Phong Nha, Quảng Bình:</strong> Du lịch mạo hiểm bền vững với hang động kỳ vĩ</li>
      <li><strong>Côn Đảo:</strong> Bảo tồn rùa biển kết hợp du lịch có trách nhiệm</li>
    </ul>
    <h2>Xu hướng du lịch bền vững 2026</h2>
    <p>Năm 2026 chứng kiến sự bùng nổ của "regenerative tourism" — du lịch tái sinh, không chỉ giảm thiểu tác động tiêu cực mà còn chủ động cải thiện điểm đến. Du khách tham gia trồng rừng, dọn bãi biển, phục hồi san hô hoặc dạy tiếng Anh cho trẻ em vùng cao như một phần của chuyến đi.</p>
    <p>"Slow travel" (du lịch chậm) cũng đang là xu hướng — thay vì cố gắng đi nhiều nơi nhất có thể, du khách dành thời gian sâu hơn tại mỗi điểm đến, hòa mình vào cuộc sống địa phương và tạo kết nối thực sự với con người và văn hóa nơi đó.</p>
    <h2>Vai trò của công nghệ</h2>
    <p>Công nghệ đang hỗ trợ du lịch bền vững theo nhiều cách: ứng dụng đo lường dấu chân carbon cá nhân, nền tảng đặt phòng ưu tiên cơ sở lưu trú xanh, và AI giúp tối ưu hóa lộ trình để giảm thiểu di chuyển. Blockchain cũng được sử dụng để đảm bảo minh bạch trong các chương trình carbon offset.</p>`
  },
  {
    id: 18,
    title: 'Thương mại điện tử xuyên biên giới: Cơ hội cho SMEs Việt Nam',
    excerpt: 'Doanh nghiệp nhỏ và vừa Việt Nam đang tận dụng e-commerce để vươn ra thế giới.',
    category: 'kinh-doanh',
    author: 'Huỳnh Văn Phú',
    authorAvatar: 'https://ui-avatars.com/api/?name=Van+Phu&background=22c55e&color=fff',
    date: '2026-02-21',
    readTime: 7,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    featured: false,
    views: 9345,
    tags: ['E-commerce', 'Xuất khẩu', 'SME'],
    content: `<p>Thương mại điện tử xuyên biên giới đang mở ra cánh cửa cho các doanh nghiệp nhỏ và vừa Việt Nam tiếp cận thị trường toàn cầu. Với dân số 100 triệu người và vị trí chiến lược trong chuỗi cung ứng toàn cầu, Việt Nam có mọi điều kiện để trở thành "công xưởng e-commerce" của Đông Nam Á.</p>
    <h2>Bức tranh thương mại điện tử xuyên biên giới Việt Nam</h2>
    <p>Kim ngạch xuất khẩu qua thương mại điện tử của Việt Nam năm 2025 đạt 8 tỷ USD, tăng 35% so với năm trước. Dự kiến con số này sẽ đạt 12 tỷ USD vào cuối 2026. Các mặt hàng xuất khẩu chủ lực bao gồm thời trang, thủ công mỹ nghệ, nông sản chế biến, đồ gia dụng và sản phẩm làm đẹp.</p>
    <blockquote>Thương mại điện tử xuyên biên giới là cách nhanh nhất, chi phí thấp nhất để SMEs Việt Nam tiếp cận 2 tỷ người tiêu dùng trực tuyến trên toàn thế giới. Đây là cơ hội "nghìn năm có một". — Hiệp hội Thương mại Điện tử Việt Nam</blockquote>
    <h2>Các nền tảng phổ biến</h2>
    <p>Amazon, Alibaba và Shopee International là những nền tảng hàng đầu giúp doanh nghiệp Việt Nam bán hàng ra nước ngoài. Mỗi nền tảng có đặc thù riêng:</p>
    <ul>
      <li><strong>Amazon:</strong> Thị trường Mỹ và châu Âu — yêu cầu chất lượng cao, FBA (Fulfillment by Amazon) giúp giải quyết logistics</li>
      <li><strong>Alibaba/1688:</strong> Thị trường B2B, phù hợp cho nhà sản xuất và bán buôn</li>
      <li><strong>Shopee International:</strong> Đông Nam Á — thị trường quen thuộc, rào cản thấp</li>
      <li><strong>TikTok Shop Global:</strong> Mô hình social commerce, đặc biệt hiệu quả với Gen Z</li>
      <li><strong>Etsy:</strong> Thủ công mỹ nghệ, sản phẩm handmade — điểm mạnh của Việt Nam</li>
    </ul>
    <h2>Câu chuyện thành công</h2>
    <p>Nhiều doanh nghiệp Việt Nam đã gặt hái thành công đáng kể. Một cơ sở sản xuất nón lá ở Huế bán được 10.000 sản phẩm/tháng trên Etsy với giá gấp 5 lần giá trong nước. Một startup mỹ phẩm thiên nhiên ở Đà Nẵng đạt doanh thu 2 triệu USD/năm trên Amazon chỉ sau 18 tháng. Một hợp tác xã cà phê Đắk Lắk xuất khẩu trực tiếp đến người tiêu dùng Nhật Bản qua Rakuten.</p>
    <h2>Thách thức logistics</h2>
    <p>Vận chuyển quốc tế, thủ tục hải quan và quản lý kho hàng vẫn là những thách thức lớn cần giải quyết. Chi phí vận chuyển quốc tế chiếm 15-30% giá bán, ảnh hưởng đến khả năng cạnh tranh. Thời gian giao hàng 7-21 ngày cũng là rào cản khi khách hàng quốc tế ngày càng quen với giao hàng nhanh.</p>
    <h3>Giải pháp đang triển khai</h3>
    <ul>
      <li>Xây dựng kho hàng tại nước ngoài (overseas warehouse) để rút ngắn thời gian giao hàng</li>
      <li>Hợp tác với các công ty logistics chuyên biệt như Boxme, ShipBob</li>
      <li>Sử dụng FBA (Fulfillment by Amazon) và các dịch vụ tương tự</li>
      <li>Đàm phán giá vận chuyển nhóm thông qua hiệp hội ngành hàng</li>
    </ul>
    <h2>Hỗ trợ từ Chính phủ</h2>
    <p>Bộ Công Thương đã triển khai chương trình "Go Online" hỗ trợ 10.000 doanh nghiệp lên sàn thương mại điện tử quốc tế mỗi năm. Các khóa đào tạo miễn phí về marketing quốc tế, xây dựng thương hiệu và tuân thủ quy định xuất khẩu được tổ chức thường xuyên. Mục tiêu đến 2028, Việt Nam có 100.000 doanh nghiệp bán hàng xuyên biên giới trực tuyến.</p>`
  },
  {
    id: 19,
    title: 'Thế chiến thứ nhất: Cuộc chiến thay đổi trật tự thế giới',
    excerpt: 'Nhìn lại cuộc đại chiến 1914-1918 và những bài học lịch sử còn nguyên giá trị đến ngày nay.',
    category: 'the-gioi',
    author: 'Trần Quốc Tuấn',
    authorAvatar: 'https://ui-avatars.com/api/?name=Quoc+Tuan&background=a855f7&color=fff&size=32',
    date: '2026-03-11',
    readTime: 12,
    image: 'https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?w=800&q=80',
    featured: false,
    views: 18234,
    tags: ['Lịch sử', 'Thế chiến', 'Thế giới'],
    content: `<p>Thế chiến thứ nhất (1914-1918) là cuộc xung đột toàn cầu đầu tiên trong lịch sử nhân loại, lôi kéo hơn 30 quốc gia và cướp đi sinh mạng của hơn 17 triệu người. Cuộc chiến này đã chấm dứt một thế kỷ hòa bình tương đối tại châu Âu và mở ra kỷ nguyên của bạo lực quy mô lớn, cách mạng xã hội và biến đổi địa chính trị sâu sắc.</p>
    <h2>Nguyên nhân bùng nổ</h2>
    <p>Sự cạnh tranh giữa các đế quốc châu Âu, chủ nghĩa dân tộc cực đoan, hệ thống liên minh quân sự và cuộc chạy đua vũ trang đã tạo nên "thùng thuốc súng" chỉ chờ một mồi lửa. Vụ ám sát Thái tử Franz Ferdinand tại Sarajevo ngày 28/6/1914 trở thành ngòi nổ.</p>
    <h3>Bốn nguyên nhân chính (MAIN)</h3>
    <ul>
      <li><strong>Militarism (Quân phiệt):</strong> Các cường quốc châu Âu chi tiêu quân sự tăng gấp 4 lần từ 1870-1914. Đức có quân đội mạnh nhất lục địa, Anh có hải quân hùng mạnh nhất thế giới.</li>
      <li><strong>Alliances (Liên minh):</strong> Hệ thống liên minh chằng chịt — Liên minh Tay Ba (Đức, Áo-Hung, Ý) và Liên minh Tay Ba (Pháp, Nga, Anh) — khiến một cuộc xung đột nhỏ có thể leo thang thành chiến tranh toàn cầu.</li>
      <li><strong>Imperialism (Đế quốc):</strong> Cạnh tranh thuộc địa ở châu Phi và châu Á tạo ra căng thẳng liên tục giữa các cường quốc.</li>
      <li><strong>Nationalism (Chủ nghĩa dân tộc):</strong> Phong trào dân tộc tại Balkan, nơi được gọi là "thùng thuốc súng của châu Âu".</li>
    </ul>
    <h2>Diễn biến chính</h2>
    <p>Cuộc chiến diễn ra trên nhiều mặt trận: Mặt trận phía Tây với chiến tranh chiến hào tàn khốc, Mặt trận phía Đông với những trận đánh quy mô lớn, và các chiến trường ở Trung Đông, châu Phi. Ban đầu, cả hai phe đều tin rằng cuộc chiến sẽ kết thúc trước Giáng sinh 1914, nhưng thực tế nó kéo dài hơn 4 năm đẫm máu.</p>
    <p>Mặt trận phía Tây nhanh chóng rơi vào bế tắc chiến hào — hai bên đào hàng nghìn km chiến hào từ Biển Bắc đến biên giới Thụy Sĩ. Trận Verdun (1916) và trận Somme (1916) là những ví dụ điển hình cho sự tàn khốc: hàng trăm nghìn người chết để giành vài km đất.</p>
    <blockquote>Thế chiến thứ nhất không chỉ là cuộc chiến của súng đạn mà còn là cuộc chiến của công nghệ — xe tăng, máy bay và vũ khí hóa học lần đầu được sử dụng. Lần đầu tiên, công nghiệp hóa phục vụ cho mục đích hủy diệt ở quy mô chưa từng thấy.</blockquote>
    <h2>Những đổi mới quân sự</h2>
    <p>Thế chiến I chứng kiến sự ra đời của nhiều vũ khí và chiến thuật mới làm thay đổi bộ mặt chiến tranh mãi mãi:</p>
    <ul>
      <li><strong>Xe tăng:</strong> Lần đầu được Anh sử dụng năm 1916 tại trận Somme</li>
      <li><strong>Máy bay chiến đấu:</strong> Từ trinh sát chuyển sang không chiến và ném bom</li>
      <li><strong>Vũ khí hóa học:</strong> Khí mustard và chlorine gây hậu quả kinh hoàng</li>
      <li><strong>Tàu ngầm:</strong> U-boat Đức đe dọa tuyến vận tải Đại Tây Dương</li>
      <li><strong>Súng máy:</strong> Biến mọi cuộc tấn công trực diện thành cuộc thảm sát</li>
    </ul>
    <h2>Hậu quả và bài học</h2>
    <p>Chiến tranh kết thúc với sự sụp đổ của 4 đế chế lớn: Ottoman, Áo-Hung, Đức và Nga. Hòa ước Versailles 1919 tuy chấm dứt chiến tranh nhưng lại gieo mầm cho Thế chiến thứ hai với những điều khoản trừng phạt Đức khắc nghiệt, tạo ra oán hận và bất ổn kinh tế — mảnh đất màu mỡ cho chủ nghĩa phát xít nảy sinh.</p>
    <p>Bản đồ thế giới được vẽ lại hoàn toàn: các quốc gia mới ra đời ở Đông Âu và Trung Đông, Hội Quốc Liên được thành lập như nỗ lực đầu tiên duy trì hòa bình thế giới. Thế chiến I cũng thúc đẩy phong trào đòi quyền bầu cử của phụ nữ, tăng tốc quá trình giải phóng thuộc địa, và để lại "Thế hệ lạc lối" — một thế hệ bị tổn thương sâu sắc về thể xác và tinh thần.</p>`
  },
  {
    id: 20,
    title: 'Thế chiến thứ hai: Cuộc chiến tàn khốc nhất lịch sử nhân loại',
    excerpt: 'Phân tích toàn diện về cuộc chiến tranh lớn nhất thế kỷ 20 và di sản của nó.',
    category: 'the-gioi',
    author: 'Lê Văn Hưu',
    authorAvatar: 'https://ui-avatars.com/api/?name=Van+Huu&background=a855f7&color=fff&size=32',
    date: '2026-03-10',
    readTime: 15,
    image: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=800&q=80',
    featured: false,
    views: 24567,
    tags: ['Lịch sử', 'Thế chiến II', 'Thế giới'],
    content: `<p>Thế chiến thứ hai (1939-1945) là cuộc xung đột quân sự lớn nhất và tàn khốc nhất trong lịch sử, với ước tính 70-85 triệu người thiệt mạng, chiếm khoảng 3% dân số thế giới thời đó. Cuộc chiến lan rộng trên mọi châu lục và đại dương, từ Bắc Phi đến Thái Bình Dương, từ Stalingrad đến Normandy, để lại những vết thương chưa từng lành hẳn.</p>
    <h2>Con đường dẫn đến chiến tranh</h2>
    <p>Sự trỗi dậy của chủ nghĩa phát xít tại Đức, Ý và chủ nghĩa quân phiệt tại Nhật Bản, cùng với sự thất bại của chính sách nhân nhượng, đã đẩy thế giới vào cuộc chiến tổng lực. Adolf Hitler lên nắm quyền tại Đức năm 1933, xóa bỏ Hòa ước Versailles, tái vũ trang và bắt đầu bành trướng lãnh thổ.</p>
    <p>Chính sách "appeasement" (nhân nhượng) của Anh và Pháp — điển hình là Hiệp ước Munich 1938 cho phép Đức sáp nhập Sudetenland — không ngăn được tham vọng của Hitler. Ngày 1/9/1939, Đức xâm lược Ba Lan, châm ngòi cho cuộc chiến tranh toàn cầu.</p>
    <h2>Các mặt trận chính</h2>
    <p>Thế chiến II diễn ra đồng thời trên nhiều mặt trận khổng lồ:</p>
    <ul>
      <li><strong>Mặt trận phía Đông:</strong> Cuộc đối đầu giữa Đức Quốc xã và Liên Xô — mặt trận đẫm máu nhất với hơn 30 triệu người chết. Chiến dịch Barbarossa (1941) và trận Stalingrad (1942-43) là những trận đánh quyết định lịch sử.</li>
      <li><strong>Mặt trận phía Tây:</strong> Từ cuộc đổ bộ Normandy (D-Day, 6/6/1944) đến giải phóng Paris và tiến vào Berlin.</li>
      <li><strong>Mặt trận Thái Bình Dương:</strong> Cuộc chiến trên biển và các đảo giữa Mỹ và Nhật Bản, từ Pearl Harbor đến Iwo Jima và Okinawa.</li>
      <li><strong>Bắc Phi và Địa Trung Hải:</strong> Chiến dịch El Alamein, đổ bộ Sicily và tiến vào Ý.</li>
    </ul>
    <h2>Những bước ngoặt quyết định</h2>
    <ul>
      <li>Trận Stalingrad (1942-1943): Bước ngoặt trên Mặt trận phía Đông — quân Đức lần đầu bị đại bại</li>
      <li>D-Day (6/6/1944): Cuộc đổ bộ Normandy mở Mặt trận phía Tây với 156.000 quân Đồng Minh</li>
      <li>Trận Midway (1942): Bước ngoặt trên Thái Bình Dương — hải quân Nhật mất 4 tàu sân bay</li>
      <li>Bom nguyên tử Hiroshima và Nagasaki (8/1945): Kết thúc chiến tranh và mở ra kỷ nguyên hạt nhân</li>
    </ul>
    <h2>Thảm họa Holocaust</h2>
    <p>Một trong những trang đen tối nhất của lịch sử nhân loại: chế độ Đức Quốc xã đã có hệ thống giết hại khoảng 6 triệu người Do Thái cùng hàng triệu người Rom, người khuyết tật, người đồng tính và tù nhân chính trị. Các trại tập trung như Auschwitz, Treblinka và Sobibor trở thành biểu tượng của tội ác chống lại loài người.</p>
    <blockquote>Những ai không nhớ quá khứ sẽ bị buộc phải lặp lại nó. — George Santayana</blockquote>
    <h2>Di sản và bài học</h2>
    <p>Thế chiến II dẫn đến sự thành lập Liên Hợp Quốc, Chiến tranh Lạnh, phong trào giải phóng dân tộc và trật tự thế giới mới. Tuyên ngôn Quốc tế Nhân quyền (1948), Công ước Geneva và Tòa án Nuremberg thiết lập nền tảng pháp lý quốc tế về nhân quyền và tội ác chiến tranh.</p>
    <p>Kế hoạch Marshall tái thiết châu Âu và sự thành lập NATO, trong khi ở phía bên kia, Hiệp ước Warsaw hình thành — mở đầu cho 45 năm Chiến tranh Lạnh. Bài học lớn nhất: hòa bình cần được xây dựng chủ động thông qua hợp tác quốc tế, tôn trọng nhân quyền và ngăn chặn sớm các chế độ độc tài hung hăng.</p>`
  },
  {
    id: 21,
    title: 'Chiến tranh Lạnh: Cuộc đối đầu không tiếng súng kéo dài nửa thế kỷ',
    excerpt: 'Cuộc đối đầu ý thức hệ giữa Mỹ và Liên Xô đã định hình thế giới hiện đại.',
    category: 'the-gioi',
    author: 'Nguyễn Khắc Viện',
    authorAvatar: 'https://ui-avatars.com/api/?name=Khac+Vien&background=a855f7&color=fff&size=32',
    date: '2026-03-09',
    readTime: 10,
    image: 'https://images.unsplash.com/photo-1555861496-0666c8981751?w=800&q=80',
    featured: false,
    views: 15678,
    tags: ['Lịch sử', 'Chiến tranh Lạnh', 'Địa chính trị'],
    content: `<p>Chiến tranh Lạnh (1947-1991) là cuộc đối đầu kéo dài giữa hai siêu cường Hoa Kỳ và Liên Xô, chia thế giới thành hai phe với hai hệ tư tưởng đối lập: tư bản chủ nghĩa và cộng sản chủ nghĩa. Dù không bao giờ trực tiếp giao chiến, cuộc đối đầu này đã định hình mọi khía cạnh của chính trị, kinh tế và văn hóa thế giới trong nửa thế kỷ.</p>
    <h2>Nguồn gốc của Chiến tranh Lạnh</h2>
    <p>Ngay sau khi Thế chiến II kết thúc, liên minh chống phát xít giữa phương Tây và Liên Xô nhanh chóng tan vỡ. Học thuyết Truman (1947) và Kế hoạch Marshall (1948) đánh dấu sự bắt đầu của chính sách ngăn chặn cộng sản. Liên Xô đáp trả bằng việc thiết lập "Bức màn Sắt" tại Đông Âu, phong tỏa Berlin (1948-49) và thành lập Khối Warsaw (1955).</p>
    <h3>Các giai đoạn chính</h3>
    <ul>
      <li><strong>1947-1953:</strong> Khởi đầu căng thẳng — Khủng hoảng Berlin, Chiến tranh Triều Tiên</li>
      <li><strong>1953-1962:</strong> Leo thang nguy hiểm — Khủng hoảng Suez, U-2, Vịnh Con Lợn, Khủng hoảng tên lửa Cuba</li>
      <li><strong>1963-1979:</strong> Hòa hoãn (Détente) — SALT I, chuyến thăm Trung Quốc của Nixon</li>
      <li><strong>1979-1985:</strong> Chiến tranh Lạnh mới — Xâm lược Afghanistan, "Star Wars" của Reagan</li>
      <li><strong>1985-1991:</strong> Kết thúc — Gorbachev, Perestroika, Bức tường Berlin sụp đổ</li>
    </ul>
    <h2>Những cuộc xung đột ủy nhiệm</h2>
    <p>Dù không trực tiếp giao tranh, hai siêu cường đã đối đầu gián tiếp qua nhiều cuộc chiến: Chiến tranh Triều Tiên (1950-1953), Chiến tranh Việt Nam (1955-1975), và cuộc xung đột tại Afghanistan (1979-1989). Mỗi cuộc chiến ủy nhiệm đều mang đến hậu quả thảm khốc cho người dân các nước nhỏ bị kẹt giữa hai siêu cường.</p>
    <p>Tại châu Phi và Mỹ Latin, hai phe cũng cạnh tranh ảnh hưởng thông qua viện trợ quân sự, hỗ trợ các cuộc đảo chính và hậu thuẫn các chế độ thân mình — bất kể đó là chế độ dân chủ hay độc tài.</p>
    <h2>Cuộc chạy đua vũ trụ</h2>
    <p>Một trong những di sản tích cực nhất của Chiến tranh Lạnh là cuộc chạy đua vũ trụ, dẫn đến việc con người đặt chân lên Mặt Trăng năm 1969 và mở ra kỷ nguyên khám phá không gian. Liên Xô dẫn trước với Sputnik (1957) và Yuri Gagarin — người đầu tiên bay vào vũ trụ (1961). Mỹ đáp trả bằng chương trình Apollo và cú hạ cánh lịch sử trên Mặt Trăng ngày 20/7/1969.</p>
    <h2>Khủng hoảng tên lửa Cuba: 13 ngày trên bờ vực</h2>
    <p>Tháng 10/1962, thế giới đứng trước bờ vực chiến tranh hạt nhân khi Mỹ phát hiện Liên Xô triển khai tên lửa đạn đạo tại Cuba. 13 ngày đàm phán căng thẳng giữa Kennedy và Khrushchev kết thúc với việc Liên Xô rút tên lửa, đổi lại Mỹ cam kết không xâm lược Cuba. Sự kiện này là minh chứng rõ nhất cho nguy cơ hủy diệt hạt nhân và dẫn đến các thỏa thuận kiểm soát vũ khí đầu tiên.</p>
    <h2>Sự kết thúc và thế giới mới</h2>
    <p>Bức tường Berlin sụp đổ năm 1989 và Liên Xô tan rã năm 1991 đánh dấu sự kết thúc của Chiến tranh Lạnh, mở ra kỷ nguyên đơn cực với Hoa Kỳ là siêu cường duy nhất. Tuy nhiên, nhiều di sản của Chiến tranh Lạnh vẫn hiện hữu: bán đảo Triều Tiên bị chia cắt, căng thẳng Mỹ-Trung, và kho vũ khí hạt nhân khổng lồ vẫn tồn tại.</p>
    <blockquote>Chiến tranh Lạnh nhắc nhở chúng ta rằng hòa bình không bao giờ là điều hiển nhiên. Nó đòi hỏi sự kiên nhẫn, đối thoại và ý chí chính trị mạnh mẽ từ tất cả các bên.</blockquote>`
  },
  {
    id: 22,
    title: 'Các cuộc xung đột vũ trang trên thế giới hiện nay',
    excerpt: 'Nhìn vào bức tranh toàn cầu về các điểm nóng xung đột và nỗ lực hòa bình.',
    category: 'the-gioi',
    author: 'Phạm Xuân Ẩn',
    authorAvatar: 'https://ui-avatars.com/api/?name=Xuan+An&background=f97316&color=fff&size=32',
    date: '2026-03-08',
    readTime: 11,
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80',
    featured: false,
    views: 20345,
    tags: ['Thế giới', 'Xung đột', 'Hòa bình'],
    content: `<p>Trong thế kỷ 21, mặc dù nhân loại đã đạt được nhiều tiến bộ về ngoại giao và hợp tác quốc tế, nhiều cuộc xung đột vũ trang vẫn đang diễn ra trên khắp thế giới. Theo Viện Nghiên cứu Hòa bình Quốc tế Stockholm (SIPRI), năm 2025 ghi nhận 56 cuộc xung đột vũ trang đang hoạt động — con số cao nhất kể từ sau Thế chiến II.</p>
    <h2>Những điểm nóng hiện tại</h2>
    <p>Từ Trung Đông đến châu Phi, từ Đông Âu đến Đông Nam Á, các cuộc xung đột tiếp tục gây ra khủng hoảng nhân đạo nghiêm trọng với hàng triệu người phải rời bỏ nhà cửa. Các điểm nóng đáng chú ý nhất bao gồm:</p>
    <ul>
      <li><strong>Xung đột Nga-Ukraine:</strong> Bắt đầu từ 2022, cuộc chiến giữa hai quốc gia châu Âu làm rung chuyển trật tự an ninh toàn cầu</li>
      <li><strong>Xung đột Israel-Palestine:</strong> Leo thang nghiêm trọng từ 2023, gây thương vong lớn cho dân thường</li>
      <li><strong>Nội chiến Sudan:</strong> Bùng nổ 2023, đẩy hàng triệu người vào nạn đói và di cư</li>
      <li><strong>Myanmar:</strong> Xung đột giữa quân đội và các lực lượng kháng chiến sau đảo chính 2021</li>
      <li><strong>Sahel (châu Phi):</strong> Bạo lực từ các nhóm thánh chiến tại Mali, Burkina Faso, Niger</li>
      <li><strong>Ethiopia/Tigray:</strong> Hậu quả kéo dài từ nội chiến 2020-2022</li>
    </ul>
    <h2>Nguyên nhân gốc rễ</h2>
    <p>Các cuộc xung đột hiện đại thường bắt nguồn từ sự kết hợp phức tạp của nhiều yếu tố: cạnh tranh tài nguyên (đặc biệt là nước và đất), bất bình đẳng kinh tế, căng thẳng sắc tộc và tôn giáo, thất bại quản trị nhà nước, và sự can thiệp của các cường quốc bên ngoài. Biến đổi khí hậu đang trở thành "nhân tố nhân bội" (threat multiplier), làm trầm trọng thêm xung đột về tài nguyên.</p>
    <h2>Tác động nhân đạo</h2>
    <p>Theo UNHCR, hiện có hơn 100 triệu người trên thế giới phải di dời do xung đột và bạo lực — con số cao nhất từng được ghi nhận trong lịch sử. Trong đó, 35 triệu người là trẻ em. Hàng chục triệu người đối mặt với nạn đói, thiếu nước sạch và dịch bệnh tại các vùng xung đột.</p>
    <blockquote>Hòa bình không chỉ là sự vắng mặt của chiến tranh, mà là sự hiện diện của công lý. — Martin Luther King Jr.</blockquote>
    <h2>Chi phí kinh tế của chiến tranh</h2>
    <p>Theo Viện Kinh tế và Hòa bình (IEP), chi phí toàn cầu của bạo lực và xung đột năm 2025 ước tính 17.5 nghìn tỷ USD — tương đương 12.6% GDP toàn cầu. Số tiền này nếu được dùng cho mục đích hòa bình có thể xóa đói giảm nghèo trên toàn thế giới nhiều lần.</p>
    <h2>Nỗ lực hòa bình</h2>
    <p>Liên Hợp Quốc, các tổ chức quốc tế và xã hội dân sự đang nỗ lực không ngừng để giải quyết xung đột thông qua đối thoại, trung gian hòa giải và viện trợ nhân đạo. Hiện có hơn 87.000 quân gìn giữ hòa bình LHQ đang hoạt động tại 12 sứ mệnh trên toàn cầu.</p>
    <h3>Vai trò của xã hội dân sự</h3>
    <p>Bên cạnh nỗ lực cấp nhà nước, hàng nghìn tổ chức phi chính phủ như Médecins Sans Frontières (Bác sĩ Không Biên giới), ICRC (Hội Chữ thập đỏ Quốc tế) và Amnesty International đang hoạt động tại các vùng chiến sự, cung cấp viện trợ y tế, thực phẩm và bảo vệ quyền con người. Công dân bình thường cũng đóng vai trò quan trọng thông qua vận động hòa bình, quyên góp và nâng cao nhận thức cộng đồng.</p>`
  },
  {
    id: 23,
    title: 'Xung đột Israel-Palestine: Lịch sử hơn 75 năm tranh chấp',
    excerpt: 'Tìm hiểu nguồn gốc và diễn biến cuộc xung đột dai dẳng nhất Trung Đông.',
    category: 'the-gioi',
    author: 'Nguyễn Trọng Nghĩa',
    authorAvatar: 'https://ui-avatars.com/api/?name=Trong+Nghia&background=f97316&color=fff&size=32',
    date: '2026-03-11',
    readTime: 14,
    image: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=800&q=80',
    featured: false,
    views: 32456,
    tags: ['Trung Đông', 'Israel', 'Palestine', 'Xung đột'],
    content: `<p>Xung đột Israel-Palestine là một trong những cuộc tranh chấp kéo dài nhất và phức tạp nhất trong lịch sử hiện đại, bắt nguồn từ cuối thế kỷ 19 với phong trào Chủ nghĩa Phục quốc Do Thái (Zionism). Hơn 75 năm qua, cuộc xung đột này đã cướp đi sinh mạng của hàng trăm nghìn người, tạo ra hàng triệu người tị nạn và trở thành tâm điểm của chính trị quốc tế.</p>
    <h2>Nguồn gốc lịch sử</h2>
    <p>Sau Thế chiến II và thảm họa Holocaust, Liên Hợp Quốc thông qua kế hoạch phân chia Palestine năm 1947 (Nghị quyết 181), chia vùng đất này thành hai nhà nước: một Do Thái và một Ả Rập. Người Do Thái chấp nhận kế hoạch, nhưng các nước Ả Rập từ chối. Nhà nước Israel tuyên bố thành lập ngày 14/5/1948, dẫn đến cuộc chiến tranh Ả Rập-Israel đầu tiên và sự kiện "Nakba" (Thảm họa) — hơn 700.000 người Palestine bị buộc phải rời bỏ nhà cửa.</p>
    <p>Vùng đất này có ý nghĩa thiêng liêng đối với ba tôn giáo lớn: Do Thái giáo, Kitô giáo và Hồi giáo. Jerusalem — thành phố linh thiêng chung — là một trong những vấn đề gai góc nhất trong đàm phán hòa bình, khi cả hai bên đều tuyên bố đây là thủ đô của mình.</p>
    <h2>Các cuộc chiến tranh lớn</h2>
    <ul>
      <li><strong>Chiến tranh 1948:</strong> Cuộc chiến ngay sau khi Israel thành lập — Israel mở rộng lãnh thổ vượt xa kế hoạch phân chia của LHQ</li>
      <li><strong>Chiến tranh Sáu Ngày 1967:</strong> Israel chiếm Bờ Tây, Dải Gaza, Bán đảo Sinai và Cao nguyên Golan chỉ trong 6 ngày</li>
      <li><strong>Chiến tranh Yom Kippur 1973:</strong> Ai Cập và Syria bất ngờ tấn công Israel vào ngày lễ Yom Kippur</li>
      <li><strong>Intifada lần 1 (1987-1993):</strong> Cuộc nổi dậy của người Palestine tại các vùng bị chiếm đóng</li>
      <li><strong>Hiệp định Oslo (1993):</strong> Nỗ lực hòa bình quan trọng nhất — PLO công nhận Israel, Israel công nhận PLO</li>
      <li><strong>Intifada lần 2 (2000-2005):</strong> Bạo lực leo thang sau thất bại đàm phán Camp David</li>
    </ul>
    <h2>Vấn đề cốt lõi</h2>
    <p>Các vấn đề gai góc nhất trong cuộc xung đột bao gồm:</p>
    <ul>
      <li><strong>Biên giới:</strong> Ranh giới giữa hai nhà nước tương lai — dựa trên đường biên 1967 hay ranh giới khác?</li>
      <li><strong>Jerusalem:</strong> Quy chế của thành phố linh thiêng — thủ đô chung hay chia sẻ?</li>
      <li><strong>Khu định cư:</strong> Hơn 700.000 người Israel định cư tại Bờ Tây và Đông Jerusalem — bất hợp pháp theo luật quốc tế</li>
      <li><strong>Người tị nạn:</strong> Quyền trở về của 5.7 triệu người Palestine tị nạn và hậu duệ</li>
      <li><strong>An ninh:</strong> Đảm bảo an ninh cho cả hai bên</li>
    </ul>
    <blockquote>Xung đột Israel-Palestine không có giải pháp quân sự. Chỉ có đàm phán công bằng, tôn trọng quyền tự quyết của cả hai dân tộc, mới có thể mang lại hòa bình lâu dài. — Cựu Tổng Thư ký LHQ Kofi Annan</blockquote>
    <h2>Tình hình hiện tại</h2>
    <p>Cuộc xung đột tiếp tục leo thang với những đợt giao tranh mới, khiến cộng đồng quốc tế lo ngại về viễn cảnh hòa bình lâu dài trong khu vực. Gaza phải chịu phong tỏa kéo dài, kinh tế kiệt quệ và cơ sở hạ tầng bị tàn phá nặng nề. Bờ Tây tiếp tục bị chia cắt bởi các khu định cư và rào chắn an ninh.</p>
    <p>Giải pháp hai nhà nước — một Israel và một Palestine cùng tồn tại hòa bình — vẫn được cộng đồng quốc tế ủng hộ nhưng ngày càng khó thực hiện trên thực địa. Thế giới tiếp tục kêu gọi hai bên quay lại bàn đàm phán, nhưng con đường đến hòa bình vẫn còn rất xa và đầy chông gai.</p>`
  },
  {
    id: 24,
    title: 'Chiến tranh Vùng Vịnh 1991: Chiến dịch Bão táp Sa mạc',
    excerpt: 'Cuộc chiến giải phóng Kuwait đánh dấu sự thay đổi cán cân quyền lực tại Trung Đông.',
    category: 'the-gioi',
    author: 'Trần Đại Quang',
    authorAvatar: 'https://ui-avatars.com/api/?name=Dai+Quang&background=a855f7&color=fff&size=32',
    date: '2026-03-10',
    readTime: 10,
    image: 'https://images.unsplash.com/photo-1567177662154-dfeb4c93b6ae?w=800&q=80',
    featured: false,
    views: 14567,
    tags: ['Trung Đông', 'Chiến tranh Vùng Vịnh', 'Iraq'],
    content: `<p>Chiến tranh Vùng Vịnh (1990-1991) bùng nổ khi Iraq dưới thời Saddam Hussein xâm lược và sáp nhập Kuwait vào tháng 2/8/1990, dẫn đến phản ứng quân sự quy mô lớn từ liên minh quốc tế do Hoa Kỳ dẫn đầu. Cuộc chiến này đánh dấu bước ngoặt trong lịch sử quân sự hiện đại và định hình lại cán cân quyền lực tại Trung Đông.</p>
    <h2>Bối cảnh: Tại sao Iraq xâm lược Kuwait?</h2>
    <p>Sau 8 năm chiến tranh Iran-Iraq (1980-1988), Iraq nợ nần chồng chất — riêng Kuwait và Ả Rập Xê Út cho vay hơn 65 tỷ USD. Saddam Hussein cáo buộc Kuwait "khai thác trộm" dầu từ mỏ Rumaila nằm ở biên giới hai nước và yêu cầu xóa nợ. Khi Kuwait từ chối, Saddam quyết định dùng vũ lực.</p>
    <p>Chỉ trong vài giờ ngày 2/8/1990, quân đội Iraq với 100.000 quân đã tràn ngập Kuwait. Tiểu vương Kuwait phải chạy sang Ả Rập Xê Út. Cộng đồng quốc tế lên án mạnh mẽ và Hội đồng Bảo an LHQ thông qua nghị quyết yêu cầu Iraq rút quân.</p>
    <h2>Chiến dịch Lá chắn Sa mạc</h2>
    <p>Từ tháng 8/1990 đến tháng 1/1991, Mỹ tập hợp liên minh 35 quốc gia và triển khai hơn 900.000 quân đến Ả Rập Xê Út trong Chiến dịch Lá chắn Sa mạc (Desert Shield) — cuộc triển khai quân sự lớn nhất kể từ Thế chiến II. Ngoại giao được thử nhưng Saddam từ chối mọi tối hậu thư.</p>
    <h2>Chiến dịch Bão táp Sa mạc</h2>
    <p>Ngày 17/1/1991, chiến dịch Bão táp Sa mạc (Desert Storm) bắt đầu với chiến dịch không kích quy mô lớn kéo dài 38 ngày đêm. Hơn 100.000 phi vụ được thực hiện, phá hủy hệ thống phòng không, cơ sở hạ tầng quân sự và mạng lưới chỉ huy của Iraq. Cuộc tấn công trên bộ ngày 24/2/1991 chỉ kéo dài 100 giờ trước khi Iraq tuyên bố ngừng bắn.</p>
    <blockquote>Chiến tranh Vùng Vịnh là cuộc chiến đầu tiên được phát sóng trực tiếp trên truyền hình toàn cầu qua CNN, thay đổi mãi mãi cách công chúng tiếp nhận thông tin chiến tranh.</blockquote>
    <h2>Công nghệ quân sự mới</h2>
    <p>Chiến tranh Vùng Vịnh được gọi là "cuộc chiến truyền hình đầu tiên" và giới thiệu nhiều công nghệ quân sự đột phá:</p>
    <ul>
      <li><strong>F-117 Nighthawk:</strong> Máy bay tàng hình đầu tiên được sử dụng trong chiến đấu</li>
      <li><strong>Bom thông minh (smart bombs):</strong> Vũ khí dẫn đường chính xác bằng laser và GPS</li>
      <li><strong>Tên lửa Tomahawk:</strong> Tên lửa hành trình phóng từ tàu chiến</li>
      <li><strong>Patriot:</strong> Hệ thống phòng thủ tên lửa đánh chặn Scud của Iraq</li>
      <li><strong>GPS:</strong> Lần đầu được sử dụng rộng rãi trong quân sự</li>
    </ul>
    <h2>Hậu quả</h2>
    <p>Kuwait được giải phóng nhưng Saddam Hussein vẫn nắm quyền, dẫn đến các lệnh trừng phạt quốc tế và cuộc xâm lược Iraq năm 2003. Các mỏ dầu Kuwait bị Iraq đốt cháy trước khi rút quân, gây ra thảm họa môi trường nghiêm trọng. Lệnh trừng phạt kinh tế khắc nghiệt lên Iraq trong thập kỷ tiếp theo khiến hàng trăm nghìn dân thường, đặc biệt trẻ em, thiệt mạng do thiếu lương thực và thuốc men.</p>
    <p>Cuộc chiến cũng dẫn đến sự hiện diện quân sự lâu dài của Mỹ tại Ả Rập Xê Út — một trong những nguyên nhân chính mà Osama bin Laden viện dẫn để thành lập al-Qaeda và thực hiện các vụ tấn công khủng bố, bao gồm sự kiện 11/9/2001.</p>`
  },
  {
    id: 25,
    title: 'Chiến tranh Iraq 2003: Cuộc xâm lược gây tranh cãi nhất thế kỷ 21',
    excerpt: 'Phân tích cuộc chiến dựa trên cáo buộc vũ khí hủy diệt hàng loạt và hệ quả kéo dài.',
    category: 'the-gioi',
    author: 'Lê Đức Thọ',
    authorAvatar: 'https://ui-avatars.com/api/?name=Duc+Tho&background=f97316&color=fff&size=32',
    date: '2026-03-09',
    readTime: 13,
    image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=800&q=80',
    featured: false,
    views: 19876,
    tags: ['Trung Đông', 'Iraq', 'Chiến tranh'],
    content: `<p>Tháng 3/2003, Hoa Kỳ và liên minh phát động cuộc xâm lược Iraq với lý do Saddam Hussein sở hữu vũ khí hủy diệt hàng loạt (WMD) — một cáo buộc sau này được chứng minh là sai. Cuộc chiến này trở thành một trong những quyết định đối ngoại gây tranh cãi nhất trong lịch sử hiện đại, với hậu quả vẫn đang ám ảnh Trung Đông đến tận ngày nay.</p>
    <h2>Con đường dẫn đến chiến tranh</h2>
    <p>Sau sự kiện 11/9/2001, chính quyền Bush xác định "trục ma quỷ" gồm Iraq, Iran và Triều Tiên. Ngoại trưởng Colin Powell trình bày trước Hội đồng Bảo an LHQ bằng chứng về WMD của Iraq — bao gồm hình ảnh vệ tinh và chứng cứ tình báo — mà sau này đều được xác nhận là sai lệch hoặc phóng đại. Pháp và Đức phản đối mạnh mẽ, dẫn đến rạn nứt trong liên minh phương Tây.</p>
    <p>Không có nghị quyết LHQ ủy quyền, Mỹ cùng Anh, Úc và một số đồng minh thành lập "Liên minh Tự nguyện" và phát động cuộc tấn công ngày 20/3/2003.</p>
    <h2>Chiến dịch quân sự</h2>
    <p>Chiến dịch "Shock and Awe" (Kinh hoàng và Sợ hãi) mở đầu bằng hàng nghìn cuộc không kích vào Baghdad. Chế độ Saddam Hussein sụp đổ chỉ trong 3 tuần — quân đội Iraq tan rã nhanh chóng. Hình ảnh tượng Saddam bị kéo đổ tại Quảng trường Firdos ngày 9/4/2003 trở thành biểu tượng của cuộc chiến.</p>
    <p>Tuy nhiên, chiến thắng quân sự nhanh chóng che đậy một thất bại chiến lược nghiêm trọng: không có kế hoạch hậu chiến khả thi. Quyết định giải tán quân đội Iraq và loại bỏ toàn bộ thành viên đảng Baath khỏi bộ máy nhà nước đẩy hàng trăm nghìn người vũ trang và có kinh nghiệm vào thất nghiệp — nhiều người trong số họ sau này gia nhập các nhóm nổi dậy.</p>
    <h2>Bạo lực phe phái và nổi dậy</h2>
    <p>Iraq nhanh chóng rơi vào hỗn loạn với bạo lực phe phái giữa người Shia và Sunni, các vụ đánh bom tự sát gần như hàng ngày, và phong trào nổi dậy vũ trang. Đỉnh điểm là cuộc nội chiến 2006-2007 với hàng nghìn người chết mỗi tháng.</p>
    <blockquote>Chiến tranh Iraq là bài học đắt giá về hậu quả của việc can thiệp quân sự thiếu kế hoạch hậu chiến. Chiến thắng trên chiến trường không có nghĩa là chiến thắng trong hòa bình.</blockquote>
    <h2>Hệ quả kéo dài</h2>
    <p>Cuộc chiến khiến hàng trăm nghìn người Iraq thiệt mạng (ước tính 150.000-600.000 tùy nguồn), tạo ra khoảng trống quyền lực dẫn đến sự trỗi dậy của ISIS, và gây ra cuộc khủng hoảng tị nạn lớn trong khu vực với 4 triệu người phải di dời.</p>
    <ul>
      <li>Chi phí cho Mỹ: hơn 2 nghìn tỷ USD và 4.500 binh sĩ tử trận</li>
      <li>Uy tín quốc tế của Mỹ suy giảm nghiêm trọng</li>
      <li>Iraq mất ổn định trong hơn một thập kỷ</li>
      <li>Sự trỗi dậy của ISIS từ tàn dư al-Qaeda tại Iraq</li>
      <li>Iran mở rộng ảnh hưởng tại Iraq thông qua các nhóm dân quân Shia</li>
    </ul>
    <h2>Bài học cho thế giới</h2>
    <p>Cuộc chiến Iraq để lại nhiều bài học cay đắng: nguy hiểm của tình báo sai lệch, tầm quan trọng của sự ủy quyền quốc tế, nhu cầu kế hoạch hậu chiến kỹ lưỡng, và hậu quả lâu dài của việc phá vỡ cấu trúc nhà nước mà không có phương án thay thế. Những bài học này vẫn còn nguyên giá trị trong bối cảnh địa chính trị hiện nay.</p>`
  },
  {
    id: 26,
    title: 'Nội chiến Syria: Thảm họa nhân đạo lớn nhất thế kỷ 21',
    excerpt: 'Hơn một thập kỷ nội chiến đã biến Syria thành biểu tượng của sự tàn phá.',
    category: 'the-gioi',
    author: 'Võ Nguyên Giáp',
    authorAvatar: 'https://ui-avatars.com/api/?name=Nguyen+Giap&background=f97316&color=fff&size=32',
    date: '2026-03-08',
    readTime: 12,
    image: 'https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?w=800&q=80',
    featured: false,
    views: 21345,
    tags: ['Trung Đông', 'Syria', 'Nội chiến'],
    content: `<p>Nội chiến Syria bắt đầu năm 2011 từ các cuộc biểu tình trong phong trào Mùa xuân Ả Rập, sau đó leo thang thành cuộc xung đột vũ trang phức tạp với sự tham gia của nhiều bên. Từ một cuộc nổi dậy dân sự đòi cải cách, Syria biến thành chiến trường của các cường quốc khu vực và quốc tế, tạo ra thảm họa nhân đạo lớn nhất thế kỷ 21.</p>
    <h2>Từ biểu tình đến nội chiến</h2>
    <p>Tháng 3/2011, lấy cảm hứng từ Mùa xuân Ả Rập, người dân thành phố Daraa xuống đường phản đối chế độ Bashar al-Assad sau khi an ninh bắt giữ và tra tấn một nhóm thiếu niên vẽ graffiti chống chính phủ. Biểu tình lan rộng khắp cả nước. Chính quyền Assad đáp trả bằng vũ lực — bắn vào người biểu tình, dẫn đến sự hình thành của Quân đội Syria Tự do (FSA) và cuộc nội chiến toàn diện.</p>
    <h2>Các bên tham chiến</h2>
    <p>Cuộc chiến không chỉ là giữa chính phủ Assad và phe đối lập, mà còn lôi kéo ISIS, lực lượng người Kurd, cùng sự can thiệp của Nga, Mỹ, Thổ Nhĩ Kỳ và Iran. Bản đồ kiểm soát lãnh thổ Syria ở đỉnh điểm xung đột là một mảng màu hỗn loạn:</p>
    <ul>
      <li><strong>Chính phủ Assad:</strong> Được Nga không kích hỗ trợ từ 2015, lực lượng Hezbollah và dân quân Iran hậu thuẫn</li>
      <li><strong>Phe đối lập:</strong> Được Mỹ, Thổ Nhĩ Kỳ và các nước vùng Vịnh hỗ trợ — nhưng chia rẽ thành hàng chục nhóm</li>
      <li><strong>ISIS:</strong> Kiểm soát vùng rộng lớn ở đông Syria, tuyên bố "Caliphate"</li>
      <li><strong>Lực lượng người Kurd (SDF):</strong> Được Mỹ hậu thuẫn, kiểm soát đông bắc Syria</li>
      <li><strong>Thổ Nhĩ Kỳ:</strong> Can thiệp quân sự ở bắc Syria, chống cả ISIS và người Kurd</li>
    </ul>
    <h2>Vũ khí hóa học</h2>
    <p>Chế độ Assad bị cáo buộc nhiều lần sử dụng vũ khí hóa học chống lại dân thường. Vụ tấn công hóa học tại Ghouta (8/2013) khiến hơn 1.400 người thiệt mạng suýt dẫn đến cuộc can thiệp quân sự của Mỹ. Vụ tấn công Khan Sheikhoun (4/2017) và Douma (4/2018) dẫn đến các đợt không kích trả đũa của Mỹ, Anh và Pháp.</p>
    <blockquote>Syria là thất bại lớn nhất của cộng đồng quốc tế trong thế kỷ 21. Chúng ta đã chứng kiến tội ác chiến tranh, sử dụng vũ khí hóa học và nạn đói bị vũ khí hóa — tất cả trước ống kính camera — mà không thể ngăn chặn. — Cựu đặc phái viên LHQ về Syria</blockquote>
    <h2>Khủng hoảng nhân đạo</h2>
    <p>Hơn 500.000 người thiệt mạng, 6.7 triệu người phải di dời trong nước và 5.6 triệu người tị nạn ra nước ngoài. Hạ tầng y tế, giáo dục và cơ sở vật chất bị phá hủy nặng nề. Hơn 90% dân số Syria sống trong nghèo đói. Cuộc khủng hoảng tị nạn Syria gây ra làn sóng di cư lớn nhất châu Âu kể từ Thế chiến II, ảnh hưởng sâu sắc đến chính trị nhiều nước EU.</p>
    <h2>Bài học cho thế giới</h2>
    <p>Syria cho thấy một cuộc nội chiến có thể nhanh chóng trở thành cuộc xung đột quốc tế phức tạp, với hậu quả nhân đạo khổng lồ. Sự thất bại của Hội đồng Bảo an LHQ — với quyền phủ quyết của Nga và Trung Quốc ngăn chặn mọi hành động — đặt ra câu hỏi nghiêm túc về hiệu quả của hệ thống an ninh tập thể quốc tế trong thế kỷ 21.</p>`
  },
  {
    id: 27,
    title: 'Chiến tranh Yemen: Cuộc khủng hoảng bị lãng quên',
    excerpt: 'Yemen đang trải qua cuộc khủng hoảng nhân đạo tồi tệ nhất thế giới.',
    category: 'the-gioi',
    author: 'Hoàng Minh Châu',
    authorAvatar: 'https://ui-avatars.com/api/?name=Minh+Chau&background=f97316&color=fff&size=32',
    date: '2026-03-07',
    readTime: 9,
    image: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&q=80',
    featured: false,
    views: 11234,
    tags: ['Trung Đông', 'Yemen', 'Nhân đạo'],
    content: `<p>Chiến tranh Yemen bùng nổ năm 2014 khi phiến quân Houthi chiếm thủ đô Sanaa, dẫn đến sự can thiệp quân sự của liên minh do Ả Rập Xê Út dẫn đầu từ năm 2015. Cuộc chiến này, dù ít được truyền thông quốc tế đưa tin so với các xung đột khác, đã tạo ra thảm họa nhân đạo mà LHQ gọi là "tồi tệ nhất thế giới".</p>
    <h2>Bối cảnh lịch sử</h2>
    <p>Yemen là quốc gia nghèo nhất Trung Đông, với lịch sử bất ổn kéo dài. Bắc Yemen và Nam Yemen thống nhất năm 1990, nhưng căng thẳng giữa hai miền không bao giờ được giải quyết triệt để. Mùa xuân Ả Rập 2011 buộc Tổng thống Ali Abdullah Saleh từ chức, nhưng quá trình chuyển giao quyền lực thất bại khi phiến quân Houthi — nhóm vũ trang Shia từ miền Bắc — tiến chiếm Sanaa năm 2014.</p>
    <h2>Cuộc chiến ủy nhiệm</h2>
    <p>Yemen trở thành chiến trường của cuộc đối đầu giữa Ả Rập Xê Út (hậu thuẫn Sunni) và Iran (hậu thuẫn Shia), phản ánh cuộc cạnh tranh quyền lực rộng lớn hơn tại Trung Đông. Tháng 3/2015, liên minh do Ả Rập Xê Út dẫn đầu phát động chiến dịch không kích nhằm khôi phục chính phủ hợp pháp.</p>
    <ul>
      <li><strong>Phe Houthi:</strong> Kiểm soát thủ đô Sanaa và phần lớn miền Bắc, được Iran hỗ trợ vũ khí và cố vấn</li>
      <li><strong>Chính phủ được công nhận quốc tế:</strong> Đặt tại Aden, được liên minh Ả Rập Xê Út-UAE hậu thuẫn</li>
      <li><strong>Hội đồng Chuyển tiếp phía Nam (STC):</strong> Được UAE hỗ trợ, muốn tách miền Nam thành quốc gia độc lập</li>
      <li><strong>Al-Qaeda bán đảo Ả Rập (AQAP):</strong> Lợi dụng hỗn loạn để mở rộng hoạt động</li>
    </ul>
    <blockquote>Yemen là cuộc chiến mà thế giới quay lưng. Trẻ em chết vì đói, vì dịch tả, vì bom — và thế giới hầu như không biết. — Jan Egeland, Hội đồng Tị nạn Na Uy</blockquote>
    <h2>Thảm họa nhân đạo</h2>
    <p>Liên Hợp Quốc gọi đây là cuộc khủng hoảng nhân đạo tồi tệ nhất thế giới: 80% dân số (24 triệu người) cần viện trợ, hàng triệu người đối mặt nạn đói, và dịch bệnh tả lan rộng với hơn 2.5 triệu ca nhiễm — đợt bùng phát tả lớn nhất trong lịch sử hiện đại.</p>
    <h3>Những con số đau lòng</h3>
    <ul>
      <li>Hơn 150.000 người thiệt mạng trực tiếp do chiến tranh</li>
      <li>Ước tính 227.000 người chết do hậu quả gián tiếp (đói, bệnh)</li>
      <li>2.3 triệu trẻ em dưới 5 tuổi bị suy dinh dưỡng cấp tính</li>
      <li>4 triệu người phải di dời trong nước</li>
      <li>Hơn 60% cơ sở y tế bị phá hủy hoặc ngừng hoạt động</li>
    </ul>
    <h2>Triển vọng hòa bình</h2>
    <p>Các nỗ lực đàm phán hòa bình do LHQ trung gian đã đạt được một số tiến triển, bao gồm thỏa thuận ngừng bắn tạm thời. Thỏa thuận bình thường hóa Iran-Ả Rập Xê Út năm 2023 do Trung Quốc làm trung gian cũng mở ra hy vọng mới. Tuy nhiên, con đường đến hòa bình toàn diện vẫn còn rất xa khi các bên xung đột có mục tiêu khác biệt sâu sắc và sự chia rẽ trong nội bộ mỗi phe ngày càng phức tạp.</p>`
  },
  {
    id: 28,
    title: 'Sự trỗi dậy và sụp đổ của ISIS tại Trung Đông',
    excerpt: 'Từ "Nhà nước Hồi giáo" tự xưng đến sự tan rã: Câu chuyện về tổ chức khủng bố khét tiếng nhất.',
    category: 'the-gioi',
    author: 'Đặng Thái Sơn',
    authorAvatar: 'https://ui-avatars.com/api/?name=Thai+Son&background=a855f7&color=fff&size=32',
    date: '2026-03-06',
    readTime: 11,
    image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&q=80',
    featured: false,
    views: 25678,
    tags: ['Trung Đông', 'ISIS', 'Khủng bố'],
    content: `<p>ISIS (Nhà nước Hồi giáo Iraq và Levant) nổi lên từ tàn dư của al-Qaeda tại Iraq và tận dụng khoảng trống quyền lực sau cuộc nội chiến Syria để mở rộng lãnh thổ. Câu chuyện về sự trỗi dậy và sụp đổ của ISIS là một trong những chương đen tối nhất của lịch sử Trung Đông đương đại, để lại bài học về nguy cơ của cực đoan hóa và thất bại quản trị nhà nước.</p>
    <h2>Nguồn gốc: Từ al-Qaeda đến ISIS</h2>
    <p>ISIS bắt nguồn từ tổ chức "al-Qaeda tại Iraq" (AQI) do Abu Musab al-Zarqawi thành lập năm 2004, trong bối cảnh hỗn loạn sau cuộc xâm lược Iraq. Sau khi al-Zarqawi bị tiêu diệt năm 2006, tổ chức suy yếu nhưng hồi sinh dưới sự lãnh đạo của Abu Bakr al-Baghdadi. Nội chiến Syria từ 2011 tạo cơ hội vàng cho ISIS mở rộng hoạt động sang lãnh thổ Syria.</p>
    <h2>Đỉnh cao quyền lực</h2>
    <p>Năm 2014, ISIS kiểm soát một vùng lãnh thổ rộng lớn trải dài từ miền bắc Syria đến miền tây Iraq — diện tích tương đương Vương quốc Anh, với dân số 8-12 triệu người. Al-Baghdadi tuyên bố thành lập "Caliphate" (Nhà nước Hồi giáo) tại Đại giáo đường al-Nuri, Mosul, và thu hút hơn 40.000 chiến binh nước ngoài từ 80 quốc gia.</p>
    <h3>ISIS khác biệt gì so với các nhóm khủng bố khác?</h3>
    <ul>
      <li><strong>Kiểm soát lãnh thổ:</strong> Không chỉ là mạng lưới khủng bố mà vận hành như một "nhà nước" với quân đội, cảnh sát, tòa án, hệ thống thuế</li>
      <li><strong>Tuyên truyền tinh vi:</strong> Sử dụng mạng xã hội và video chất lượng cao để tuyển mộ chiến binh toàn cầu</li>
      <li><strong>Nguồn tài chính:</strong> Thu nhập hàng tỷ USD từ dầu mỏ, cổ vật, tiền chuộc, thuế và buôn lậu</li>
      <li><strong>Bạo lực cực đoan:</strong> Sử dụng bạo lực man rợ có chủ đích như công cụ tâm lý chiến</li>
    </ul>
    <blockquote>ISIS là sản phẩm của sự thất bại — thất bại quản trị tại Iraq, nội chiến tại Syria, và sự thờ ơ của cộng đồng quốc tế. Hiểu nguyên nhân gốc rễ là chìa khóa để ngăn chặn sự tái sinh của nó.</blockquote>
    <h2>Tội ác chống nhân loại</h2>
    <p>ISIS thực hiện hàng loạt tội ác chiến tranh và tội ác chống nhân loại: diệt chủng người Yazidi tại Sinjar (2014) với hàng nghìn nam giới bị hành quyết và phụ nữ bị bắt làm nô lệ tình dục; phá hủy di sản văn hóa tại Palmyra, Nimrud và Mosul; hành quyết hàng loạt tù nhân chiến tranh và nhà báo nước ngoài.</p>
    <h2>Cuộc chiến chống ISIS</h2>
    <p>Liên minh quốc tế do Hoa Kỳ dẫn đầu gồm hơn 60 quốc gia, cùng lực lượng người Kurd (SDF/Peshmerga) và quân đội Iraq, đã dần đẩy lùi ISIS. Mosul được giải phóng sau 9 tháng chiến đấu khốc liệt (2016-2017). Raqqa — "thủ đô" tự xưng — thất thủ tháng 10/2017. Thành trì cuối cùng Baghouz thất thủ vào tháng 3/2019.</p>
    <h2>Di sản của bạo lực</h2>
    <p>Dù mất lãnh thổ, ISIS vẫn tồn tại như mạng lưới khủng bố phân tán, tiếp tục thực hiện các vụ tấn công và tuyên truyền cực đoan trên mạng. Các chi nhánh tại Tây Phi (Boko Haram), Afghanistan (ISIS-K), Đông Phi và Đông Nam Á vẫn hoạt động. Hàng chục nghìn chiến binh ISIS và gia đình bị giam giữ tại các trại ở đông bắc Syria — quả bom hẹn giờ nếu không có giải pháp lâu dài.</p>`
  },
  {
    id: 29,
    title: 'Cuộc xung đột Iran-Ả Rập Xê Út: Cuộc chiến tranh giành ảnh hưởng',
    excerpt: 'Hai cường quốc Trung Đông đối đầu trong cuộc cạnh tranh định hình cả khu vực.',
    category: 'the-gioi',
    author: 'Bùi Quang Chiêu',
    authorAvatar: 'https://ui-avatars.com/api/?name=Quang+Chieu&background=22c55e&color=fff&size=32',
    date: '2026-03-05',
    readTime: 10,
    image: 'https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=800&q=80',
    featured: false,
    views: 13456,
    tags: ['Trung Đông', 'Iran', 'Ả Rập Xê Út', 'Địa chính trị'],
    content: `<p>Cuộc đối đầu giữa Iran và Ả Rập Xê Út là trục xung đột trung tâm tại Trung Đông, kết hợp cạnh tranh tôn giáo (Shia-Sunni), chính trị và kinh tế. Cuộc cạnh tranh giữa hai cường quốc khu vực này đã định hình hầu hết các cuộc xung đột tại Trung Đông trong hơn bốn thập kỷ qua.</p>
    <h2>Nguồn gốc đối đầu</h2>
    <p>Mối quan hệ Iran-Ả Rập Xê Út chuyển sang đối đầu sau Cách mạng Hồi giáo Iran năm 1979. Trước đó, cả hai đều là đồng minh của Mỹ. Tuy nhiên, chế độ mới của Ayatollah Khomeini tuyên bố sẽ "xuất khẩu cách mạng" khắp thế giới Hồi giáo, trực tiếp đe dọa các chế độ quân chủ Sunni trong khu vực, đặc biệt là Ả Rập Xê Út — quốc gia tự coi mình là người bảo vệ Hồi giáo Sunni và hai thánh đường thiêng liêng nhất.</p>
    <h3>Shia vs Sunni: Hiểu về phân chia tôn giáo</h3>
    <p>Sự chia rẽ Shia-Sunni bắt nguồn từ tranh chấp về quyền kế thừa sau khi Nhà tiên tri Muhammad qua đời năm 632. Ngày nay, người Sunni chiếm 85-90% tổng số tín đồ Hồi giáo, trong khi Shia chiếm 10-15%. Iran là quốc gia Shia lớn nhất, Ả Rập Xê Út là quốc gia Sunni có ảnh hưởng nhất. Tuy nhiên, chuyên gia nhấn mạnh rằng xung đột Iran-Ả Rập Xê Út chủ yếu về quyền lực chính trị, không phải giáo lý tôn giáo.</p>
    <h2>Các chiến trường ủy nhiệm</h2>
    <p>Hai nước đối đầu gián tiếp tại Yemen, Syria, Iraq, Lebanon và Bahrain thông qua các lực lượng ủy nhiệm và đồng minh khu vực:</p>
    <ul>
      <li><strong>Yemen:</strong> Ả Rập Xê Út dẫn đầu liên minh chống Houthi (được Iran hỗ trợ)</li>
      <li><strong>Syria:</strong> Iran hỗ trợ chế độ Assad, Ả Rập Xê Út hỗ trợ phe đối lập</li>
      <li><strong>Iraq:</strong> Iran ảnh hưởng mạnh qua các dân quân Shia và chính trị gia thân Iran</li>
      <li><strong>Lebanon:</strong> Hezbollah (được Iran tài trợ) là lực lượng chính trị-quân sự mạnh nhất</li>
      <li><strong>Bahrain:</strong> Ả Rập Xê Út can thiệp quân sự 2011 để dập tắt cuộc nổi dậy của đa số Shia</li>
    </ul>
    <blockquote>Cuộc đối đầu Iran-Ả Rập Xê Út không phải cuộc chiến tôn giáo. Đó là cuộc cạnh tranh quyền lực địa chính trị, sử dụng tôn giáo như công cụ huy động. — Vali Nasr, chuyên gia Trung Đông</blockquote>
    <h2>Yếu tố dầu mỏ</h2>
    <p>Cả hai đều là những nhà sản xuất dầu mỏ hàng đầu thế giới. Ả Rập Xê Út sản xuất khoảng 10 triệu thùng/ngày, Iran khoảng 3.5 triệu thùng/ngày (bị hạn chế bởi cấm vận). Cuộc cạnh tranh ảnh hưởng trực tiếp đến thị trường năng lượng toàn cầu và giá dầu. Trong OPEC, hai nước thường có quan điểm đối lập về hạn ngạch sản xuất.</p>
    <h2>Chương trình hạt nhân Iran</h2>
    <p>Chương trình hạt nhân của Iran là mối lo ngại lớn nhất đối với Ả Rập Xê Út. Thỏa thuận JCPOA 2015 hạn chế chương trình hạt nhân Iran, nhưng Mỹ rút khỏi thỏa thuận năm 2018 dưới thời Trump, dẫn đến Iran nối lại làm giàu uranium. Ả Rập Xê Út tuyên bố sẽ phát triển vũ khí hạt nhân nếu Iran có bom nguyên tử.</p>
    <h2>Triển vọng hòa giải</h2>
    <p>Thỏa thuận bình thường hóa quan hệ do Trung Quốc làm trung gian năm 2023 mở ra hy vọng mới — đại sứ quán hai nước mở cửa trở lại. Tuy nhiên, những khác biệt sâu xa vẫn còn đó: chương trình hạt nhân Iran, chiến tranh Yemen, và ảnh hưởng tại Iraq và Lebanon. Hòa bình bền vững đòi hỏi giải quyết các vấn đề gốc rễ, không chỉ cải thiện quan hệ ngoại giao bề mặt.</p>`
  },
  {
    id: 30,
    title: 'Cuộc chiến Lebanon 2006: 34 ngày thay đổi Trung Đông',
    excerpt: 'Cuộc chiến giữa Israel và Hezbollah đã để lại những hậu quả sâu rộng cho khu vực.',
    category: 'the-gioi',
    author: 'Phan Bội Châu',
    authorAvatar: 'https://ui-avatars.com/api/?name=Boi+Chau&background=a855f7&color=fff&size=32',
    date: '2026-03-04',
    readTime: 8,
    image: 'https://images.unsplash.com/photo-1499591934245-40b55745b905?w=800&q=80',
    featured: false,
    views: 10234,
    tags: ['Trung Đông', 'Lebanon', 'Hezbollah', 'Israel'],
    content: `<p>Tháng 7/2006, một cuộc tấn công xuyên biên giới của Hezbollah đã châm ngòi cho cuộc chiến kéo dài 34 ngày giữa Israel và lực lượng dân quân Lebanon này. Cuộc chiến ngắn nhưng dữ dội này đã thay đổi cán cân quân sự tại Trung Đông và chứng minh rằng một lực lượng phi nhà nước có thể đối đầu với một trong những quân đội mạnh nhất thế giới.</p>
    <h2>Hezbollah: Từ phong trào kháng chiến đến siêu lực lượng</h2>
    <p>Hezbollah (Đảng của Thượng đế) ra đời năm 1982 trong bối cảnh Israel xâm lược Lebanon. Được Iran tài trợ và huấn luyện, Hezbollah phát triển từ nhóm du kích nhỏ thành lực lượng quân sự tinh nhuệ với hàng chục nghìn chiến binh, kho tên lửa khổng lồ, và đồng thời là đảng chính trị lớn trong Quốc hội Lebanon. Hezbollah được xem là "nhà nước trong nhà nước" tại Lebanon.</p>
    <h2>Nguyên nhân trực tiếp</h2>
    <p>Ngày 12/7/2006, Hezbollah phát động cuộc tấn công xuyên biên giới, bắt cóc hai binh sĩ Israel và giết 8 người khác. Israel coi đây là hành động chiến tranh và phát động chiến dịch quân sự quy mô lớn nhằm giải cứu binh sĩ, tiêu diệt Hezbollah và thiết lập vùng đệm an ninh ở miền Nam Lebanon.</p>
    <h2>Diễn biến 34 ngày</h2>
    <p>Israel tiến hành không kích quy mô lớn và tấn công trên bộ vào miền nam Lebanon, trong khi Hezbollah bắn hơn 4.000 tên lửa Katyusha vào lãnh thổ Israel — lần đầu tiên kể từ 1991 dân thường Israel phải sơ tán hàng loạt.</p>
    <ul>
      <li><strong>Không kích Israel:</strong> Hơn 7.000 phi vụ ném bom, phá hủy cầu đường, sân bay, nhà máy điện Lebanon</li>
      <li><strong>Phong tỏa hải quân:</strong> Israel phong tỏa toàn bộ bờ biển và không phận Lebanon</li>
      <li><strong>Tấn công trên bộ:</strong> Xe tăng và bộ binh Israel tiến vào miền Nam nhưng gặp kháng cự mạnh</li>
      <li><strong>Tên lửa chống tăng:</strong> Hezbollah sử dụng tên lửa Kornet của Nga, phá hủy nhiều xe tăng Merkava</li>
    </ul>
    <blockquote>Cuộc chiến 2006 phá vỡ huyền thoại bất khả chiến bại của quân đội Israel. Một lực lượng du kích với vài nghìn chiến binh đã buộc một cường quốc quân sự phải chấp nhận ngừng bắn mà không đạt mục tiêu. — Patrick Seale, nhà phân tích Trung Đông</blockquote>
    <h2>Kết quả</h2>
    <p>Cuộc chiến kết thúc ngày 14/8/2006 với Nghị quyết 1701 của Hội đồng Bảo an LHQ. Cả hai bên đều tuyên bố chiến thắng. Thiệt hại nhân mạng: hơn 1.200 dân thường Lebanon (phần lớn do không kích), 44 dân thường Israel, 121 binh sĩ Israel và ước tính 250-600 chiến binh Hezbollah.</p>
    <h2>Tác động lâu dài</h2>
    <p>Hezbollah củng cố vị thế chính trị tại Lebanon và mở rộng kho vũ khí, trở thành lực lượng phi nhà nước mạnh nhất Trung Đông. Ước tính Hezbollah sở hữu 130.000-150.000 tên lửa — nhiều hơn kho vũ khí của hầu hết quân đội quốc gia. Cuộc chiến 2006 cũng thay đổi chiến lược quân sự của Israel, dẫn đến việc phát triển hệ thống phòng thủ Iron Dome và chiến lược "răn đe bằng thiệt hại không tương xứng" gây tranh cãi.</p>
    <p>Đối với Lebanon, cuộc chiến gây thiệt hại ước tính 3.6 tỷ USD cho cơ sở hạ tầng và đẩy nước này vào tình trạng bất ổn chính trị kéo dài.</p>`
  },
  {
    id: 31,
    title: 'Mùa xuân Ả Rập: Làn sóng cách mạng thay đổi Trung Đông',
    excerpt: 'Phong trào biểu tình lan rộng khắp thế giới Ả Rập và những kết quả trái chiều.',
    category: 'the-gioi',
    author: 'Nguyễn Ái Quốc',
    authorAvatar: 'https://ui-avatars.com/api/?name=Ai+Quoc&background=f97316&color=fff&size=32',
    date: '2026-03-03',
    readTime: 11,
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
    featured: false,
    views: 17890,
    tags: ['Trung Đông', 'Mùa xuân Ả Rập', 'Cách mạng'],
    content: `<p>Mùa xuân Ả Rập bắt đầu từ Tunisia vào cuối năm 2010 khi Mohamed Bouazizi — một người bán hàng rong 26 tuổi — tự thiêu để phản đối tham nhũng và sự bất công của chính quyền địa phương. Hành động tuyệt vọng của anh đã châm ngòi cho làn sóng biểu tình lan rộng khắp thế giới Ả Rập, thách thức các chế độ độc tài đã cầm quyền hàng thập kỷ.</p>
    <h2>Nguyên nhân sâu xa</h2>
    <p>Mùa xuân Ả Rập không bùng phát trong một ngày. Nó là kết quả tích tụ của nhiều thập kỷ bất mãn:</p>
    <ul>
      <li><strong>Tham nhũng tràn lan:</strong> Các chế độ độc tài kiểm soát tài nguyên quốc gia vì lợi ích cá nhân và gia tộc</li>
      <li><strong>Thất nghiệp cao:</strong> 25-30% thanh niên thất nghiệp, dù nhiều người có bằng đại học</li>
      <li><strong>Đàn áp chính trị:</strong> Không có tự do ngôn luận, báo chí hay lập hội</li>
      <li><strong>Bất bình đẳng kinh tế:</strong> Khoảng cách giàu-nghèo ngày càng lớn</li>
      <li><strong>Dân số trẻ:</strong> 60% dân số dưới 30 tuổi, kết nối Internet và mạng xã hội</li>
    </ul>
    <p>Mạng xã hội — đặc biệt Facebook và Twitter — đóng vai trò then chốt trong việc tổ chức biểu tình, chia sẻ thông tin và phá vỡ sự kiểm duyệt của nhà nước. Đây là lần đầu tiên một cuộc cách mạng được "phát sóng trực tiếp" trên Internet.</p>
    <blockquote>Người dân đã nói: chúng tôi muốn phẩm giá, tự do và công bằng. Đó không phải là yêu cầu quá đáng. Đó là quyền cơ bản của con người. — Tawakkol Karman, Giải Nobel Hòa bình 2011 (Yemen)</blockquote>
    <h2>Các quốc gia bị ảnh hưởng</h2>
    <p>Phong trào lật đổ chính quyền tại Tunisia, Ai Cập, Libya và Yemen. Các cuộc biểu tình lớn nổ ra tại Bahrain, Syria, và nhiều nước khác trong khu vực. Không một quốc gia Ả Rập nào không bị ảnh hưởng ở mức độ nào đó.</p>
    <h3>Diễn biến tại từng quốc gia</h3>
    <ul>
      <li><strong>Tunisia (12/2010):</strong> Tổng thống Ben Ali bỏ trốn sau 23 năm cầm quyền — "Cách mạng Hoa nhài"</li>
      <li><strong>Ai Cập (1/2011):</strong> 18 ngày biểu tình tại Quảng trường Tahrir buộc Mubarak từ chức sau 30 năm nắm quyền</li>
      <li><strong>Libya (2/2011):</strong> Nổi dậy vũ trang, can thiệp NATO, Gaddafi bị lật đổ và giết chết</li>
      <li><strong>Yemen (2/2011):</strong> Tổng thống Saleh từ chức sau nhiều tháng biểu tình</li>
      <li><strong>Syria (3/2011):</strong> Biểu tình hòa bình bị đàn áp dã man, leo thang thành nội chiến</li>
      <li><strong>Bahrain (2/2011):</strong> Biểu tình của người Shia bị Ả Rập Xê Út can thiệp quân sự dập tắt</li>
    </ul>
    <h2>Kết quả trái chiều</h2>
    <p>Tunisia được xem là câu chuyện thành công duy nhất với quá trình chuyển đổi dân chủ — hiến pháp mới, bầu cử tự do, xã hội dân sự phát triển — dù gặp khó khăn kinh tế. Ai Cập trải qua bất ổn trước khi quay lại chế độ quân sự dưới thời Tổng thống Sisi sau cuộc đảo chính 2013. Libya và Syria rơi vào nội chiến kéo dài, Yemen chìm trong chiến tranh ủy nhiệm.</p>
    <h2>Tại sao nhiều cuộc cách mạng thất bại?</h2>
    <p>Các chuyên gia chỉ ra nhiều nguyên nhân: thiếu lãnh đạo và tổ chức chính trị rõ ràng, thể chế dân sự yếu kém sau nhiều thập kỷ độc tài, sự can thiệp của các cường quốc bên ngoài, phản cách mạng từ giới quân sự và "nhà nước sâu" (deep state), và chia rẽ sắc tộc-tôn giáo bị khai thác.</p>
    <h2>Bài học</h2>
    <p>Mùa xuân Ả Rập cho thấy khát vọng tự do và dân chủ là phổ quát, nhưng quá trình chuyển đổi chính trị đòi hỏi thời gian, thể chế vững mạnh và sự đồng thuận xã hội. Lật đổ một chế độ độc tài chỉ là bước đầu — xây dựng một nền dân chủ hoạt động hiệu quả là nhiệm vụ khó khăn hơn nhiều, đòi hỏi kiên nhẫn và nỗ lực của nhiều thế hệ.</p>`
  },
  {
    id: 32,
    title: 'Chiến tranh Iran-Iraq: Cuộc chiến 8 năm đẫm máu',
    excerpt: 'Cuộc chiến dài nhất thế kỷ 20 giữa hai cường quốc Trung Đông với hơn 1 triệu người thiệt mạng.',
    category: 'the-gioi',
    author: 'Lê Lợi Minh',
    authorAvatar: 'https://ui-avatars.com/api/?name=Loi+Minh&background=a855f7&color=fff&size=32',
    date: '2026-03-02',
    readTime: 12,
    image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80',
    featured: false,
    views: 12567,
    tags: ['Trung Đông', 'Iran', 'Iraq', 'Chiến tranh'],
    content: `<p>Chiến tranh Iran-Iraq (1980-1988) là một trong những cuộc xung đột đẫm máu nhất nửa sau thế kỷ 20, bắt đầu khi Saddam Hussein xâm lược Iran sau cuộc Cách mạng Hồi giáo 1979. Kéo dài 8 năm — lâu hơn cả hai Thế chiến — cuộc chiến cướp đi sinh mạng của hơn 1 triệu người và để lại hậu quả định hình Trung Đông đến tận ngày nay.</p>
    <h2>Bối cảnh và nguyên nhân</h2>
    <p>Cách mạng Hồi giáo Iran 1979 lật đổ Quốc vương Pahlavi — đồng minh của Mỹ — và thiết lập nhà nước thần quyền dưới sự lãnh đạo của Ayatollah Khomeini. Saddam Hussein lo sợ cuộc cách mạng sẽ lan sang cộng đồng Shia đông đảo tại Iraq (chiếm 60% dân số nhưng bị người Sunni cầm quyền). Ông cũng nhìn thấy cơ hội chiếm lại vùng đất tranh chấp và kiểm soát tuyến đường thủy Shatt al-Arab giàu dầu mỏ.</p>
    <p>Ngày 22/9/1980, Iraq phát động cuộc tấn công bất ngờ trên bộ và không quân vào Iran, tin rằng chế độ cách mạng mới còn yếu ớt sẽ sụp đổ nhanh chóng. Saddam đã sai lầm nghiêm trọng.</p>
    <h2>Chiến tranh chiến hào hiện đại</h2>
    <p>Cuộc tấn công ban đầu của Iraq nhanh chóng bị chặn đứng. Đến năm 1982, Iran phản công đẩy quân Iraq về biên giới. Từ đó, cuộc chiến rơi vào bế tắc kéo dài, gợi nhớ đến chiến tranh chiến hào trong Thế chiến I. Hàng triệu binh sĩ hai bên đối mặt nhau qua những chiến hào dài hàng trăm km.</p>
    <ul>
      <li><strong>Vũ khí hóa học:</strong> Iraq sử dụng khí mustard, sarin và tabun chống lại quân Iran và cả người Kurd Iraq. Vụ tấn công hóa học Halabja (3/1988) giết 5.000 dân thường Kurd — tội ác chiến tranh nghiêm trọng nhất</li>
      <li><strong>"Chiến tranh thành phố":</strong> Cả hai bên bắn tên lửa đạn đạo vào thành phố của nhau, nhắm vào dân thường</li>
      <li><strong>Chiến thuật "sóng người":</strong> Iran sử dụng chiến thuật tấn công bằng số đông, bao gồm cả thiếu niên tình nguyện (Basij)</li>
    </ul>
    <blockquote>Chiến tranh Iran-Iraq là cuộc chiến mà cả thế giới đều muốn quên nhưng không nên quên. Đó là bài học về sự tàn khốc khi tham vọng cá nhân được đặt trên mạng sống con người.</blockquote>
    <h2>Chiến tranh tàu chở dầu</h2>
    <p>Cả hai nước tấn công tàu chở dầu của nhau và các nước thứ ba tại Vùng Vịnh, đe dọa nguồn cung dầu mỏ toàn cầu và lôi kéo sự can thiệp của Hoa Kỳ. Từ 1984-1988, hơn 500 tàu thương mại bị tấn công. Mỹ triển khai hải quân hộ tống tàu chở dầu Kuwait, dẫn đến đụng độ trực tiếp với Iran (sự kiện Praying Mantis, 1988).</p>
    <h2>Vai trò của các cường quốc</h2>
    <p>Một trong những khía cạnh đen tối nhất của cuộc chiến là cách các cường quốc tiếp nhiên liệu cho cả hai bên:</p>
    <ul>
      <li><strong>Mỹ:</strong> Hỗ trợ tình báo và kinh tế cho Iraq, dù biết Saddam sử dụng vũ khí hóa học</li>
      <li><strong>Liên Xô:</strong> Cung cấp vũ khí cho cả hai bên</li>
      <li><strong>Pháp:</strong> Bán máy bay chiến đấu Mirage và tên lửa Exocet cho Iraq</li>
      <li><strong>Trung Quốc:</strong> Bán tên lửa Silkworm cho Iran</li>
      <li><strong>Các nước vùng Vịnh:</strong> Tài trợ hàng tỷ USD cho Iraq</li>
    </ul>
    <h2>Kết thúc không người chiến thắng</h2>
    <p>Cuộc chiến kết thúc ngày 20/8/1988 với Nghị quyết ngừng bắn 598 của Hội đồng Bảo an LHQ. Ayatollah Khomeini chấp nhận ngừng bắn, ví von nó như "uống thuốc độc". Không bên nào giành được lợi thế lãnh thổ, nhưng cả triệu người đã thiệt mạng và hai nền kinh tế kiệt quệ: Iraq nợ 80 tỷ USD, Iran mất hàng trăm tỷ USD doanh thu dầu mỏ.</p>
    <h2>Di sản và hệ quả</h2>
    <p>Cuộc chiến để lại hậu quả sâu rộng: hàng triệu cựu binh bị tổn thương thể chất và tinh thần, vùng đất nhiễm chất độc hóa học, và hai xã hội mang đầy vết thương. Quan trọng hơn, cuộc chiến trực tiếp dẫn đến việc Iraq xâm lược Kuwait năm 1990 — Saddam cần tiền trả nợ chiến tranh — châm ngòi cho Chiến tranh Vùng Vịnh và chuỗi sự kiện định hình Trung Đông cho đến ngày nay.</p>`
  }
];

// ===== Utility Functions =====
function getCategoryInfo(catId) {
  return categories.find(c => c.id === catId);
}

function getArticlesByCategory(catId) {
  return articles.filter(a => a.category === catId);
}

function getArticleById(id) {
  return articles.find(a => a.id === parseInt(id));
}

function getRelatedArticles(articleId, limit = 3) {
  const article = getArticleById(articleId);
  if (!article) return [];
  return articles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, limit);
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  const months = ['Th01','Th02','Th03','Th04','Th05','Th06','Th07','Th08','Th09','Th10','Th11','Th12'];
  return `${d.getDate()} ${months[d.getMonth()]}, ${d.getFullYear()}`;
}

function formatViews(num) {
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  return num.toString();
}
