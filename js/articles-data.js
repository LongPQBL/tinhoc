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
    avatar: 'https://ui-avatars.com/api/?name=Bao+Long&background=6366f1&color=fff&size=32',
    tasks: [
      { title: 'Domain setup', status: 'done' },
      { title: 'DNS config', status: 'done' },
      { title: 'SSL certificate', status: 'done' }
    ]
  },
  {
    name: 'Trương Lê Bình Minh',
    role: 'Provide ideas',
    avatar: 'https://ui-avatars.com/api/?name=Binh+Minh&background=22c55e&color=fff&size=32',
    tasks: [
      { title: 'Content strategy', status: 'done' },
      { title: 'Feature proposals', status: 'done' },
      { title: 'UX research', status: 'done' }
    ]
  },
  {
    name: 'Hồ Đắc Anh Kiệt',
    role: 'Design web',
    avatar: 'https://ui-avatars.com/api/?name=Anh+Kiet&background=a855f7&color=fff&size=32',
    tasks: [
      { title: 'UI mockups', status: 'done' },
      { title: 'Color scheme', status: 'done' },
      { title: 'Responsive layouts', status: 'done' }
    ]
  },
  {
    name: 'Mai Hồng Nhật Minh',
    role: 'Code web',
    avatar: 'https://ui-avatars.com/api/?name=Nhat+Minh&background=ec4899&color=fff&size=32',
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
    content: `<p>Năm 2026 đánh dấu một bước ngoặt lớn trong lĩnh vực trí tuệ nhân tạo. Các mô hình ngôn ngữ lớn đã đạt đến mức độ hiểu biết và sáng tạo chưa từng có, mở ra vô số ứng dụng mới trong đời sống hàng ngày.</p>
    <h2>Những xu hướng nổi bật</h2>
    <p>Từ y tế đến giáo dục, AI đang được tích hợp vào mọi lĩnh vực. Các bệnh viện sử dụng AI để chẩn đoán bệnh chính xác hơn, trong khi các trường học áp dụng AI để cá nhân hóa việc học.</p>
    <blockquote>AI không thay thế con người, mà trao quyền cho con người làm được nhiều hơn.</blockquote>
    <h2>Tác động đến thị trường lao động</h2>
    <p>Nhiều công việc mới được tạo ra trong lĩnh vực quản lý và giám sát AI. Kỹ năng làm việc với AI trở thành yêu cầu bắt buộc trong hầu hết các ngành nghề.</p>
    <h3>Kỹ năng cần thiết</h3>
    <ul>
      <li>Prompt engineering và giao tiếp với AI</li>
      <li>Phân tích dữ liệu và tư duy phản biện</li>
      <li>Sáng tạo và giải quyết vấn đề phức tạp</li>
    </ul>
    <p>Tương lai của AI hứa hẹn sẽ còn nhiều điều thú vị hơn nữa trong những năm tới.</p>`
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
    content: `<p>Một startup công nghệ tại TP.HCM vừa hoàn tất vòng gọi vốn Series B trị giá 50 triệu USD, trở thành một trong những thương vụ gọi vốn lớn nhất của startup Việt Nam trong năm 2026.</p>
    <h2>Mô hình kinh doanh độc đáo</h2>
    <p>Startup này tập trung vào giải pháp fintech cho thị trường Đông Nam Á, với sản phẩm thanh toán số tích hợp AI giúp doanh nghiệp vừa và nhỏ quản lý tài chính hiệu quả hơn.</p>
    <h2>Kế hoạch mở rộng</h2>
    <p>Với nguồn vốn mới, công ty dự kiến mở rộng hoạt động sang Philippines, Indonesia và Thái Lan trong 18 tháng tới.</p>
    <blockquote>Chúng tôi tin rằng Đông Nam Á là thị trường fintech tiềm năng nhất thế giới hiện nay.</blockquote>`
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
    content: `<p>Sử dụng kính thiên văn thế hệ mới, các nhà khoa học đã phát hiện một hố đen siêu lớn có hành vi bất thường, thách thức các lý thuyết vật lý hiện tại.</p>
    <h2>Chi tiết phát hiện</h2>
    <p>Hố đen này nằm cách Trái Đất khoảng 3 tỷ năm ánh sáng và có khối lượng gấp 40 tỷ lần Mặt Trời. Điều đặc biệt là nó phát ra các tia năng lượng theo mô hình chưa từng được ghi nhận.</p>
    <h2>Ý nghĩa khoa học</h2>
    <p>Phát hiện này có thể dẫn đến việc sửa đổi các mô hình vật lý thiên văn hiện tại và mở ra hướng nghiên cứu mới về bản chất của không-thời gian.</p>`
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
    content: `<p>Mùa hè 2026 hứa hẹn sẽ là một mùa phim bom tấn đáng nhớ với loạt phim được đầu tư khủng từ các hãng phim lớn.</p>
    <h2>Top 5 phim đáng xem</h2>
    <p>Từ phim siêu anh hùng đến phim khoa học viễn tưởng, danh sách phim mùa hè năm nay có đủ thể loại cho mọi khán giả.</p>
    <h2>Phim nào gây thất vọng?</h2>
    <p>Không phải bộ phim nào cũng đạt kỳ vọng. Một số phim dù có kinh phí khổng lồ nhưng lại nhận về những đánh giá không mấy tích cực từ giới phê bình.</p>`
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
    content: `<p>Các vùng Blue Zone là những nơi có tỷ lệ người sống trên 100 tuổi cao nhất thế giới. Vậy bí quyết sống thọ của họ là gì?</p>
    <h2>Chế độ ăn uống</h2>
    <p>Người dân Blue Zone ăn chủ yếu thực vật, với nhiều đậu, rau xanh và ngũ cốc nguyên hạt. Họ ăn ít thịt đỏ và tránh thực phẩm chế biến sẵn.</p>
    <h2>Vận động tự nhiên</h2>
    <p>Thay vì tập gym, họ vận động tự nhiên trong cuộc sống hàng ngày - đi bộ, làm vườn, và các hoạt động thể chất nhẹ nhàng.</p>
    <h3>Kết nối cộng đồng</h3>
    <p>Một yếu tố quan trọng khác là sự kết nối xã hội mạnh mẽ. Họ duy trì các mối quan hệ gia đình và cộng đồng chặt chẽ.</p>`
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
    content: `<p>Tài chính phi tập trung (DeFi) tiếp tục phát triển mạnh mẽ, mang đến những cơ hội mới cho cả nhà đầu tư và người dùng thông thường.</p>
    <h2>DeFi là gì?</h2>
    <p>DeFi là hệ thống tài chính được xây dựng trên blockchain, cho phép người dùng vay, cho vay, giao dịch mà không cần trung gian như ngân hàng.</p>
    <h2>Rủi ro cần lưu ý</h2>
    <p>Dù có nhiều tiềm năng, DeFi cũng đi kèm rủi ro về bảo mật, biến động giá và quy định pháp lý.</p>`
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
    content: `<p>Thị trường bất động sản Việt Nam năm 2026 chứng kiến nhiều biến động đáng chú ý với sự phục hồi mạnh mẽ của phân khúc nhà ở.</p>
    <h2>Phân khúc nổi bật</h2>
    <p>Bất động sản công nghiệp và logistics tiếp tục là điểm sáng nhờ làn sóng FDI và sự phát triển của thương mại điện tử.</p>
    <h2>Lời khuyên cho nhà đầu tư</h2>
    <p>Các chuyên gia khuyến nghị nhà đầu tư nên tập trung vào các dự án có pháp lý rõ ràng và vị trí có tiềm năng phát triển hạ tầng.</p>`
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
    content: `<p>Các nhà khoa học đã phát triển thành công vaccine mRNA thế hệ mới có khả năng chống lại nhiều biến thể virus cùng lúc.</p>
    <h2>Cơ chế hoạt động</h2>
    <p>Vaccine mRNA thế hệ mới sử dụng cấu trúc vòng tròn giúp tăng độ bền và hiệu quả gấp 3 lần so với thế hệ trước.</p>
    <h2>Ứng dụng trong tương lai</h2>
    <p>Công nghệ này không chỉ dùng để phòng bệnh truyền nhiễm mà còn có tiềm năng trong điều trị ung thư và các bệnh di truyền.</p>`
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
    content: `<p>K-pop đã vượt ra khỏi biên giới Hàn Quốc để trở thành hiện tượng văn hóa toàn cầu, ảnh hưởng đến thời trang, ngôn ngữ và lối sống của giới trẻ.</p>
    <h2>Con số ấn tượng</h2>
    <p>Doanh thu ngành K-pop năm 2025 đạt hơn 10 tỷ USD, với các nhóm nhạc liên tục lập kỷ lục về lượng stream và bán album.</p>
    <h2>Xu hướng mới</h2>
    <p>Các nghệ sĩ K-pop ngày càng kết hợp nhiều thể loại nhạc khác nhau và mở rộng hoạt động sang các lĩnh vực như thời trang, mỹ phẩm và công nghệ.</p>`
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
    content: `<p>Trong nhịp sống hối hả hiện đại, mindfulness - hay sống tỉnh thức - đang trở thành xu hướng được nhiều người quan tâm.</p>
    <h2>Mindfulness là gì?</h2>
    <p>Mindfulness là trạng thái chú ý đến hiện tại một cách có chủ đích, không phán xét. Đây là phương pháp đã được khoa học chứng minh hiệu quả trong giảm stress.</p>
    <h2>Cách thực hành đơn giản</h2>
    <p>Bạn có thể bắt đầu với 5 phút thiền mỗi sáng, tập trung vào hơi thở và quan sát suy nghĩ mà không phán xét.</p>`
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
    content: `<p>Xe điện tự lái đang dần trở thành hiện thực tại nhiều thành phố lớn trên thế giới, hứa hẹn thay đổi hoàn toàn cách chúng ta di chuyển.</p>
    <h2>Tiến bộ công nghệ</h2>
    <p>Các hệ thống cảm biến LiDAR và AI đã đạt đến mức có thể xử lý hầu hết các tình huống giao thông phức tạp trong đô thị.</p>
    <h2>Thách thức còn lại</h2>
    <p>Dù công nghệ đã sẵn sàng, việc triển khai đại trà vẫn gặp nhiều thách thức về quy định pháp lý, hạ tầng và niềm tin của người dùng.</p>`
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
    content: `<p>Chính phủ Việt Nam đặt mục tiêu kinh tế số đóng góp 30% GDP vào năm 2030, với cột mốc quan trọng 50 tỷ USD vào cuối năm 2026.</p>
    <h2>Động lực tăng trưởng</h2>
    <p>Thương mại điện tử, fintech và giáo dục trực tuyến là ba trụ cột chính thúc đẩy tăng trưởng kinh tế số.</p>
    <h2>Cơ hội cho doanh nghiệp</h2>
    <p>Các doanh nghiệp vừa và nhỏ có cơ hội tiếp cận thị trường rộng lớn hơn thông qua chuyển đổi số.</p>`
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
    content: `<p>Với hơn 20 GW công suất lắp đặt, Việt Nam hiện là quốc gia dẫn đầu Đông Nam Á về năng lượng mặt trời.</p>
    <h2>Tiềm năng phát triển</h2>
    <p>Việt Nam có vị trí địa lý thuận lợi với số giờ nắng cao, đặc biệt ở các tỉnh miền Trung và miền Nam.</p>
    <h2>Thách thức</h2>
    <p>Lưới điện cần được nâng cấp để đáp ứng nguồn năng lượng tái tạo ngày càng tăng và giải quyết vấn đề lưu trữ năng lượng.</p>`
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
    content: `<p>Thể thao điện tử tại Việt Nam đã chuyển mình từ hoạt động giải trí sang ngành công nghiệp chuyên nghiệp với doanh thu hàng trăm triệu USD.</p>
    <h2>Đội tuyển Việt Nam trên đấu trường quốc tế</h2>
    <p>Các đội tuyển Việt Nam đã giành nhiều thành tích đáng tự hào tại các giải đấu quốc tế, đặc biệt trong các tựa game MOBA và FPS.</p>
    <h2>Cơ hội nghề nghiệp</h2>
    <p>Ngành esports không chỉ dành cho game thủ mà còn tạo ra nhiều cơ hội cho streamer, caster, huấn luyện viên và nhà quản lý.</p>`
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
    content: `<p>Fusion food - sự kết hợp giữa ẩm thực truyền thống Việt Nam với kỹ thuật nấu ăn quốc tế - đang trở thành xu hướng hot trên toàn thế giới.</p>
    <h2>Những món ăn nổi bật</h2>
    <p>Phở burger, bánh mì sushi, và bún chả taco là những ví dụ điển hình cho sự sáng tạo không giới hạn của fusion food Việt Nam.</p>
    <h2>Nhà hàng Việt trên bản đồ ẩm thực thế giới</h2>
    <p>Ngày càng nhiều nhà hàng Việt Nam được vinh danh trong các bảng xếp hạng ẩm thực quốc tế uy tín.</p>`
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
    content: `<p>Metaverse - thế giới ảo 3D nơi người dùng có thể tương tác, làm việc và giải trí - đang dần trở thành hiện thực với sự đầu tư khổng lồ từ các tập đoàn công nghệ.</p>
    <h2>Ứng dụng trong kinh doanh</h2>
    <p>Từ showroom ảo đến hội nghị trực tuyến, metaverse đang thay đổi cách doanh nghiệp tương tác với khách hàng.</p>
    <h2>Thị trường bất động sản ảo</h2>
    <p>Đất ảo trong metaverse đã trở thành một lớp tài sản đầu tư mới, với nhiều giao dịch lên đến hàng triệu USD.</p>`
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
    content: `<p>Du lịch bền vững không chỉ là xu hướng mà đang trở thành tiêu chuẩn mới trong ngành du lịch toàn cầu.</p>
    <h2>Nguyên tắc du lịch bền vững</h2>
    <p>Giảm thiểu tác động môi trường, tôn trọng văn hóa địa phương và đóng góp cho kinh tế cộng đồng là ba trụ cột chính.</p>
    <h2>Điểm đến xanh tại Việt Nam</h2>
    <p>Nhiều điểm đến tại Việt Nam đang chuyển đổi sang mô hình du lịch bền vững, từ homestay sinh thái đến tour trải nghiệm văn hóa địa phương.</p>`
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
    content: `<p>Thương mại điện tử xuyên biên giới đang mở ra cánh cửa cho các doanh nghiệp nhỏ và vừa Việt Nam tiếp cận thị trường toàn cầu.</p>
    <h2>Các nền tảng phổ biến</h2>
    <p>Amazon, Alibaba và Shopee International là những nền tảng hàng đầu giúp doanh nghiệp Việt Nam bán hàng ra nước ngoài.</p>
    <h2>Thách thức logistics</h2>
    <p>Vận chuyển quốc tế, thủ tục hải quan và quản lý kho hàng vẫn là những thách thức lớn cần giải quyết.</p>`
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
    content: `<p>Thế chiến thứ nhất (1914-1918) là cuộc xung đột toàn cầu đầu tiên trong lịch sử nhân loại, lôi kéo hơn 30 quốc gia và cướp đi sinh mạng của hơn 17 triệu người.</p>
    <h2>Nguyên nhân bùng nổ</h2>
    <p>Sự cạnh tranh giữa các đế quốc châu Âu, chủ nghĩa dân tộc cực đoan, hệ thống liên minh quân sự và cuộc chạy đua vũ trang đã tạo nên "thùng thuốc súng" chỉ chờ một mồi lửa. Vụ ám sát Thái tử Franz Ferdinand tại Sarajevo ngày 28/6/1914 trở thành ngòi nổ.</p>
    <h2>Diễn biến chính</h2>
    <p>Cuộc chiến diễn ra trên nhiều mặt trận: Mặt trận phía Tây với chiến tranh chiến hào tàn khốc, Mặt trận phía Đông với những trận đánh quy mô lớn, và các chiến trường ở Trung Đông, châu Phi.</p>
    <blockquote>Thế chiến thứ nhất không chỉ là cuộc chiến của súng đạn mà còn là cuộc chiến của công nghệ - xe tăng, máy bay và vũ khí hóa học lần đầu được sử dụng.</blockquote>
    <h2>Hậu quả và bài học</h2>
    <p>Chiến tranh kết thúc với sự sụp đổ của 4 đế chế lớn: Ottoman, Áo-Hung, Đức và Nga. Hòa ước Versailles 1919 tuy chấm dứt chiến tranh nhưng lại gieo mầm cho Thế chiến thứ hai.</p>`
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
    content: `<p>Thế chiến thứ hai (1939-1945) là cuộc xung đột quân sự lớn nhất và tàn khốc nhất trong lịch sử, với ước tính 70-85 triệu người thiệt mạng, chiếm khoảng 3% dân số thế giới thời đó.</p>
    <h2>Con đường dẫn đến chiến tranh</h2>
    <p>Sự trỗi dậy của chủ nghĩa phát xít tại Đức, Ý và chủ nghĩa quân phiệt tại Nhật Bản, cùng với sự thất bại của chính sách nhân nhượng, đã đẩy thế giới vào cuộc chiến tổng lực.</p>
    <h2>Những bước ngoặt quyết định</h2>
    <ul>
      <li>Trận Stalingrad (1942-1943): Bước ngoặt trên Mặt trận phía Đông</li>
      <li>D-Day (6/6/1944): Cuộc đổ bộ Normandy mở Mặt trận phía Tây</li>
      <li>Trận Midway (1942): Bước ngoặt trên Thái Bình Dương</li>
      <li>Bom nguyên tử Hiroshima và Nagasaki (8/1945): Kết thúc chiến tranh</li>
    </ul>
    <h2>Di sản và bài học</h2>
    <p>Thế chiến II dẫn đến sự thành lập Liên Hợp Quốc, Chiến tranh Lạnh, phong trào giải phóng dân tộc và trật tự thế giới mới. Bài học về hòa bình và nhân quyền vẫn còn nguyên giá trị.</p>
    <blockquote>Những ai không nhớ quá khứ sẽ bị buộc phải lặp lại nó. — George Santayana</blockquote>`
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
    content: `<p>Chiến tranh Lạnh (1947-1991) là cuộc đối đầu kéo dài giữa hai siêu cường Hoa Kỳ và Liên Xô, chia thế giới thành hai phe với hai hệ tư tưởng đối lập.</p>
    <h2>Những cuộc xung đột ủy nhiệm</h2>
    <p>Dù không trực tiếp giao tranh, hai siêu cường đã đối đầu gián tiếp qua nhiều cuộc chiến: Chiến tranh Triều Tiên (1950-1953), Chiến tranh Việt Nam (1955-1975), và cuộc xung đột tại Afghanistan (1979-1989).</p>
    <h2>Cuộc chạy đua vũ trụ</h2>
    <p>Một trong những di sản tích cực nhất của Chiến tranh Lạnh là cuộc chạy đua vũ trụ, dẫn đến việc con người đặt chân lên Mặt Trăng năm 1969 và mở ra kỷ nguyên khám phá không gian.</p>
    <h2>Sự kết thúc và thế giới mới</h2>
    <p>Bức tường Berlin sụp đổ năm 1989 và Liên Xô tan rã năm 1991 đánh dấu sự kết thúc của Chiến tranh Lạnh, mở ra kỷ nguyên đơn cực với Hoa Kỳ là siêu cường duy nhất.</p>
    <blockquote>Chiến tranh Lạnh nhắc nhở chúng ta rằng hòa bình không bao giờ là điều hiển nhiên.</blockquote>`
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
    content: `<p>Trong thế kỷ 21, mặc dù nhân loại đã đạt được nhiều tiến bộ về ngoại giao và hợp tác quốc tế, nhiều cuộc xung đột vũ trang vẫn đang diễn ra trên khắp thế giới.</p>
    <h2>Những điểm nóng hiện tại</h2>
    <p>Từ Trung Đông đến châu Phi, từ Đông Âu đến Đông Nam Á, các cuộc xung đột tiếp tục gây ra khủng hoảng nhân đạo nghiêm trọng với hàng triệu người phải rời bỏ nhà cửa.</p>
    <h2>Tác động nhân đạo</h2>
    <p>Theo UNHCR, hiện có hơn 100 triệu người trên thế giới phải di dời do xung đột và bạo lực — con số cao nhất từng được ghi nhận trong lịch sử.</p>
    <h2>Nỗ lực hòa bình</h2>
    <p>Liên Hợp Quốc, các tổ chức quốc tế và xã hội dân sự đang nỗ lực không ngừng để giải quyết xung đột thông qua đối thoại, trung gian hòa giải và viện trợ nhân đạo.</p>
    <blockquote>Hòa bình không chỉ là sự vắng mặt của chiến tranh, mà là sự hiện diện của công lý. — Martin Luther King Jr.</blockquote>`
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
    image: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80',
    featured: false,
    views: 32456,
    tags: ['Trung Đông', 'Israel', 'Palestine', 'Xung đột'],
    content: `<p>Xung đột Israel-Palestine là một trong những cuộc tranh chấp kéo dài nhất và phức tạp nhất trong lịch sử hiện đại, bắt nguồn từ cuối thế kỷ 19 với phong trào Chủ nghĩa Phục quốc Do Thái.</p>
    <h2>Nguồn gốc lịch sử</h2>
    <p>Sau Thế chiến II và thảm họa Holocaust, Liên Hợp Quốc thông qua kế hoạch phân chia Palestine năm 1947. Nhà nước Israel tuyên bố thành lập năm 1948, dẫn đến cuộc chiến tranh Ả Rập-Israel đầu tiên và làn sóng người Palestine tị nạn.</p>
    <h2>Các cuộc chiến tranh lớn</h2>
    <ul>
      <li>Chiến tranh 1948: Cuộc chiến ngay sau khi Israel thành lập</li>
      <li>Chiến tranh Sáu Ngày 1967: Israel chiếm Bờ Tây, Gaza và Cao nguyên Golan</li>
      <li>Chiến tranh Yom Kippur 1973: Ai Cập và Syria tấn công Israel</li>
      <li>Các cuộc Intifada 1987 và 2000</li>
    </ul>
    <h2>Tình hình hiện tại</h2>
    <p>Cuộc xung đột tiếp tục leo thang với những đợt giao tranh mới, khiến cộng đồng quốc tế lo ngại về viễn cảnh hòa bình lâu dài trong khu vực.</p>`
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
    content: `<p>Chiến tranh Vùng Vịnh (1990-1991) bùng nổ khi Iraq dưới thời Saddam Hussein xâm lược và sáp nhập Kuwait vào tháng 8/1990, dẫn đến phản ứng quân sự quy mô lớn từ liên minh quốc tế do Hoa Kỳ dẫn đầu.</p>
    <h2>Chiến dịch Bão táp Sa mạc</h2>
    <p>Với hơn 900.000 quân từ 35 quốc gia, liên minh đã tiến hành chiến dịch không kích kéo dài 5 tuần trước khi phát động cuộc tấn công trên bộ chỉ kéo dài 100 giờ.</p>
    <h2>Công nghệ quân sự mới</h2>
    <p>Chiến tranh Vùng Vịnh được gọi là "cuộc chiến truyền hình đầu tiên" và giới thiệu vũ khí dẫn đường chính xác, máy bay tàng hình F-117 và hệ thống phòng thủ tên lửa Patriot.</p>
    <h2>Hậu quả</h2>
    <p>Kuwait được giải phóng nhưng Saddam Hussein vẫn nắm quyền, dẫn đến các lệnh trừng phạt quốc tế và cuộc xâm lược Iraq năm 2003.</p>`
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
    content: `<p>Tháng 3/2003, Hoa Kỳ và liên minh phát động cuộc xâm lược Iraq với lý do Saddam Hussein sở hữu vũ khí hủy diệt hàng loạt — một cáo buộc sau này được chứng minh là sai.</p>
    <h2>Chiến dịch quân sự</h2>
    <p>Chế độ Saddam Hussein sụp đổ chỉ trong vài tuần, nhưng cuộc chiếm đóng kéo dài gần một thập kỷ với bạo lực phe phái và phong trào nổi dậy.</p>
    <h2>Hệ quả kéo dài</h2>
    <p>Cuộc chiến khiến hàng trăm nghìn người Iraq thiệt mạng, tạo ra khoảng trống quyền lực dẫn đến sự trỗi dậy của ISIS, và gây ra cuộc khủng hoảng tị nạn lớn trong khu vực.</p>
    <blockquote>Chiến tranh Iraq là bài học đắt giá về hậu quả của việc can thiệp quân sự thiếu kế hoạch hậu chiến.</blockquote>`
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
    image: 'https://images.unsplash.com/photo-1542306048-633e89e30e66?w=800&q=80',
    featured: false,
    views: 21345,
    tags: ['Trung Đông', 'Syria', 'Nội chiến'],
    content: `<p>Nội chiến Syria bắt đầu năm 2011 từ các cuộc biểu tình trong phong trào Mùa xuân Ả Rập, sau đó leo thang thành cuộc xung đột vũ trang phức tạp với sự tham gia của nhiều bên.</p>
    <h2>Các bên tham chiến</h2>
    <p>Cuộc chiến không chỉ là giữa chính phủ Assad và phe đối lập, mà còn lôi kéo ISIS, lực lượng người Kurd, cùng sự can thiệp của Nga, Mỹ, Thổ Nhĩ Kỳ và Iran.</p>
    <h2>Khủng hoảng nhân đạo</h2>
    <p>Hơn 500.000 người thiệt mạng, 6.7 triệu người phải di dời trong nước và 5.6 triệu người tị nạn ra nước ngoài. Hạ tầng y tế, giáo dục và cơ sở vật chất bị phá hủy nặng nề.</p>
    <h2>Bài học cho thế giới</h2>
    <p>Syria cho thấy một cuộc nội chiến có thể nhanh chóng trở thành cuộc xung đột quốc tế phức tạp, với hậu quả nhân đạo khổng lồ.</p>`
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
    content: `<p>Chiến tranh Yemen bùng nổ năm 2014 khi phiến quân Houthi chiếm thủ đô Sanaa, dẫn đến sự can thiệp quân sự của liên minh do Ả Rập Xê Út dẫn đầu từ năm 2015.</p>
    <h2>Cuộc chiến ủy nhiệm</h2>
    <p>Yemen trở thành chiến trường của cuộc đối đầu giữa Ả Rập Xê Út (hậu thuẫn Sunni) và Iran (hậu thuẫn Shia), phản ánh cuộc cạnh tranh quyền lực rộng lớn hơn tại Trung Đông.</p>
    <h2>Thảm họa nhân đạo</h2>
    <p>Liên Hợp Quốc gọi đây là cuộc khủng hoảng nhân đạo tồi tệ nhất thế giới: 80% dân số cần viện trợ, hàng triệu người đối mặt nạn đói, và dịch bệnh tả lan rộng.</p>`
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
    content: `<p>ISIS (Nhà nước Hồi giáo Iraq và Levant) nổi lên từ tàn dư của al-Qaeda tại Iraq và tận dụng khoảng trống quyền lực sau cuộc nội chiến Syria để mở rộng lãnh thổ.</p>
    <h2>Đỉnh cao quyền lực</h2>
    <p>Năm 2014, ISIS kiểm soát một vùng lãnh thổ rộng lớn trải dài từ miền bắc Syria đến miền tây Iraq, tuyên bố thành lập "Caliphate" và thu hút hàng chục nghìn chiến binh nước ngoài.</p>
    <h2>Cuộc chiến chống ISIS</h2>
    <p>Liên minh quốc tế do Hoa Kỳ dẫn đầu, cùng lực lượng người Kurd và quân đội Iraq, đã dần đẩy lùi ISIS. Thành trì cuối cùng Baghouz thất thủ vào tháng 3/2019.</p>
    <h2>Di sản của bạo lực</h2>
    <p>Dù mất lãnh thổ, ISIS vẫn tồn tại như mạng lưới khủng bố phân tán, tiếp tục thực hiện các vụ tấn công và tuyên truyền cực đoan trên mạng.</p>`
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
    content: `<p>Cuộc đối đầu giữa Iran và Ả Rập Xê Út là trục xung đột trung tâm tại Trung Đông, kết hợp cạnh tranh tôn giáo (Shia-Sunni), chính trị và kinh tế.</p>
    <h2>Các chiến trường ủy nhiệm</h2>
    <p>Hai nước đối đầu gián tiếp tại Yemen, Syria, Iraq, Lebanon và Bahrain thông qua các lực lượng ủy nhiệm và đồng minh khu vực.</p>
    <h2>Yếu tố dầu mỏ</h2>
    <p>Cả hai đều là những nhà sản xuất dầu mỏ hàng đầu thế giới. Cuộc cạnh tranh ảnh hưởng trực tiếp đến thị trường năng lượng toàn cầu và giá dầu.</p>
    <h2>Triển vọng hòa giải</h2>
    <p>Thỏa thuận bình thường hóa quan hệ do Trung Quốc làm trung gian năm 2023 mở ra hy vọng mới, nhưng những khác biệt sâu xa vẫn còn đó.</p>`
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
    image: 'https://images.unsplash.com/photo-1548250868-763ebf04fdca?w=800&q=80',
    featured: false,
    views: 10234,
    tags: ['Trung Đông', 'Lebanon', 'Hezbollah', 'Israel'],
    content: `<p>Tháng 7/2006, một cuộc tấn công xuyên biên giới của Hezbollah đã châm ngòi cho cuộc chiến kéo dài 34 ngày giữa Israel và lực lượng dân quân Lebanon này.</p>
    <h2>Diễn biến</h2>
    <p>Israel tiến hành không kích quy mô lớn và tấn công trên bộ vào miền nam Lebanon, trong khi Hezbollah bắn hàng nghìn tên lửa vào lãnh thổ Israel.</p>
    <h2>Kết quả</h2>
    <p>Cuộc chiến kết thúc với nghị quyết ngừng bắn của Liên Hợp Quốc. Cả hai bên đều tuyên bố chiến thắng, nhưng hơn 1.000 dân thường Lebanon và 44 dân thường Israel thiệt mạng.</p>
    <h2>Tác động lâu dài</h2>
    <p>Hezbollah củng cố vị thế chính trị tại Lebanon và mở rộng kho vũ khí, trở thành lực lượng phi nhà nước mạnh nhất Trung Đông.</p>`
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
    content: `<p>Mùa xuân Ả Rập bắt đầu từ Tunisia vào cuối năm 2010 khi một người bán hàng rong tự thiêu để phản đối tham nhũng, châm ngòi cho làn sóng biểu tình lan rộng khắp thế giới Ả Rập.</p>
    <h2>Các quốc gia bị ảnh hưởng</h2>
    <p>Phong trào lật đổ chính quyền tại Tunisia, Ai Cập, Libya và Yemen. Các cuộc biểu tình lớn nổ ra tại Bahrain, Syria, và nhiều nước khác trong khu vực.</p>
    <h2>Kết quả trái chiều</h2>
    <p>Tunisia được xem là câu chuyện thành công duy nhất với quá trình chuyển đổi dân chủ. Ai Cập trải qua bất ổn trước khi quay lại chế độ quân sự. Libya và Syria rơi vào nội chiến.</p>
    <h2>Bài học</h2>
    <p>Mùa xuân Ả Rập cho thấy khát vọng tự do và dân chủ là phổ quát, nhưng quá trình chuyển đổi chính trị đòi hỏi thời gian, thể chế vững mạnh và sự đồng thuận xã hội.</p>`
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
    content: `<p>Chiến tranh Iran-Iraq (1980-1988) là một trong những cuộc xung đột đẫm máu nhất nửa sau thế kỷ 20, bắt đầu khi Saddam Hussein xâm lược Iran sau cuộc Cách mạng Hồi giáo 1979.</p>
    <h2>Chiến tranh chiến hào hiện đại</h2>
    <p>Cuộc chiến nhanh chóng rơi vào bế tắc, gợi nhớ đến chiến tranh chiến hào trong Thế chiến I. Cả hai bên sử dụng vũ khí hóa học, tấn công tàu chở dầu và nhắm vào dân thường.</p>
    <h2>Chiến tranh tàu chở dầu</h2>
    <p>Cả hai nước tấn công tàu chở dầu của nhau và các nước thứ ba tại Vùng Vịnh, đe dọa nguồn cung dầu mỏ toàn cầu và lôi kéo sự can thiệp của Hoa Kỳ.</p>
    <h2>Kết thúc không người chiến thắng</h2>
    <p>Cuộc chiến kết thúc năm 1988 với nghị quyết ngừng bắn của Liên Hợp Quốc. Không bên nào giành được lợi thế lãnh thổ, nhưng cả triệu người đã thiệt mạng và hai nền kinh tế kiệt quệ.</p>`
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
