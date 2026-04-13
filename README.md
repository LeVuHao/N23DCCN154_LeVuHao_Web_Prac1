# N23DCCN154_LeVuHao_Web_Prac1

- Họ tên: Lê Vũ Hào
- MSSV: N23DCCN154
- Bài tập: Thực hành Web 1 - Blog Listing Page bằng Next.js và Tailwind CSS

## Mô tả

Dự án là một website blog đơn giản sử dụng Next.js App Router và Tailwind CSS. Trang chủ fetch danh sách bài viết từ API JSONPlaceholder và hiển thị 12 card bài viết đầu tiên. Mỗi card có tiêu đề, tóm tắt nội dung, userId và nút `Read More` dẫn tới trang chi tiết động `/blog/[id]`.

Trang chi tiết fetch nội dung bài viết theo `id` và hiển thị tiêu đề, nội dung đầy đủ cùng nút quay lại.

## Chạy project

```bash
npm install
npm run dev
```

Mở `http://localhost:3000` trong trình duyệt.

## Công nghệ sử dụng

- Next.js App Router
- Tailwind CSS
- React
- JSONPlaceholder REST API

## Nội dung chính

- `app/page.tsx`: danh sách bài viết
- `app/blog/[id]/page.tsx`: trang chi tiết bài viết
- `components/Header.tsx`: header responsive
- `components/Badge.tsx`: component nhãn tái sử dụng
- `components/BlogCard.tsx`: component card bài viết
