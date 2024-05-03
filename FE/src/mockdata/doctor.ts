export interface IDoctor {
  id: string
  name: string
  description: string
  schedule: string[]
  address: string
  price: string
  overview: string[]
  examination: string[]
}

const DOCTOR: IDoctor = {
  id: '1',
  name: 'Thạc sĩ, Bác sĩ Đoàn Thị Lan',
  description:
    'Bác sĩ tư vấn dinh dưỡng cho phụ nữ mang thai và trẻ em, Nhiều năm kinh nghiệm trong lĩnh vực Tư vấn dinh dưỡng',
  schedule: ['07:30 - 08:00', '8:00 - 8:30'],
  address:
    'Bệnh viện Đa khoa Bảo Sơn 2, Số 52 Nguyễn Chí Thanh - Đống Đa - Hà Nội',
  price: '500.000',
  overview: [
    'Tư vấn dinh dưỡng cho phụ nữ mang thai, phụ nữ sau sinh,Tư vấn dinh dưỡng cho trẻ từ 0 – 5 tuổi, giai đoạn sơ sinh, ăn dặm',
    'Tư vấn dinh dưỡng cho phụ nữ mắc đái tháo đường thai kỳ, tăng/sụt cân trong thời kỳ mang thai, thiếu vi chất…'
  ],
  examination: [
    'Tư vấn dinh dưỡng cho phụ nữ mang thai, phụ nữ sau sinh',
    'Tư vấn dinh dưỡng cho trẻ từ 0 – 5 tuổi, giai đoạn sơ sinh, ăn dặm',
    'Tư vấn dinh dưỡng cho phụ nữ mắc đái tháo đường thai kỳ, tăng/sụt cân trong thời kỳ mang thai, thiếu vi chất…'
  ]
}

export default DOCTOR
