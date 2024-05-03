import { IItemLinkProps, TItemLinkType } from '@components/ItemLink/ItemLink'

//banner
import banner1 from '@assets/banners/banner-1.png'
import banner2 from '@assets/banners/banner-2.jpg'
import banner3 from '@assets/banners/banner-3.png'
import banner4 from '@assets/banners/banner-4.png'
import banner5 from '@assets/banners/banner-5.png'
import banner6 from '@assets/banners/banner-6.jpg'

//service
import specialist from '@assets/icons/ic-specialist.png'
import remote from '@assets/icons/ic-remote.png'
import dental from '@assets/icons/ic-dental.png'
import general from '@assets/icons/ic-general.png'
import medicalTest from '@assets/icons/ic-medical-tests.png'
import mentealHeath from '@assets/icons/ic-mental-health.png'

// specicalist images
import musculoskeletal from '@assets/icons/ic-musculoskeletal.png'
import nerve from '@assets/icons/ic-nerve.png'
import digestion from '@assets/icons/ic-digestion.png'
import heart from '@assets/icons/ic-heart.png'
import earNoseThroat from '@assets/icons/ic-ear-nose-throat.png'
import spine from '@assets/icons/ic-spine.png'
import traditional from '@assets/icons/ic-traditional-medicine.png'
import acupuncture from '@assets/icons/ic-acupincture.png'

//doctor outstanding
import doctor1 from '@assets/doctors/kieu-dinh.png'
import doctor2 from '@assets/doctors/tra-anh-duy.jpg'
import doctor3 from '@assets/doctors/pham-chi-lang.jpg'
import doctor4 from '@assets/doctors/nguyen-van-lieu.jpg'
import doctor5 from '@assets/doctors/nguyen-tien-lang.png'
import doctor6 from '@assets/doctors/hua-thuy-vi.jpg'
import doctor7 from '@assets/doctors/nguyen-tien-thanh.png'
import doctor8 from '@assets/doctors/vu-thai-ha.jpg'
import doctor9 from '@assets/doctors/le-hong-anh.jpg'
import doctor10 from '@assets/doctors/nguyen-tuong-vu.png'
import doctor11 from '@assets/doctors/phan-vuong-huy.jpg'
import doctor12 from '@assets/doctors/nguyen-trong-hung.jpg'

//facilities images
import centalMilitary from '@assets/facilities/cental-military.jpg'
import choray from '@assets/facilities/cho-ray.jpg'
import diag from '@assets/facilities/diag.png'
import doctorcheck from '@assets/facilities/doctor-check.png'
import hungviet from '@assets/facilities/hung-viet.jpg'
import medicineAndPharmacy from '@assets/facilities/medicine-and-pharmacy.jpg'
import medlatec from '@assets/facilities/medlatec.png'
import thucuc from '@assets/facilities/thu-cuc.png'
import vietduc from '@assets/facilities/viet-duc.jpg'

//hanbook
import handbook1 from '@assets/handbook/dark-eye.png'
import handbook2 from '@assets/handbook/melasmacost.png'
import handbook3 from '@assets/handbook/injection.png'
import handbook4 from '@assets/handbook/dark-eye2.png'
import handbook5 from '@assets/handbook/hifu-upgrade.png'
import handbook6 from '@assets/handbook/hifu-upgrade2.png'
import handbook7 from '@assets/handbook/skin-rejuvenation.png'
import handbook8 from '@assets/handbook/top7-melasma.png'
import handbook9 from '@assets/handbook/top7-rejuvenation.png'

//media
import vtv1 from '@assets/media/vtv1.png'
import ictnews from '@assets/media/ictnews.png'
import vnexpress from '@assets/media/vnexpress.png'
import vtcnews from '@assets/media/vtcnews.png'
import cuccntt from '@assets/media/cuccntt.png'
import infonet from '@assets/media/infonet.png'
import dantri from '@assets/media/dantri.png'

//footer
import tiktok from '@assets/icons/ic-tiktok.svg'
import facebook from '@assets/icons/ic-facebook.svg'
import youtube from '@assets/icons/ic-youtube.svg'

const LIST_LINKS: Record<TItemLinkType, IItemLinkProps[]> = {
  banner: [
    { image: banner1, path: '', type: 'banner' },
    { image: banner2, path: '', type: 'banner' },
    { image: banner3, path: '', type: 'banner' },
    { image: banner4, path: '', type: 'banner' },
    { image: banner5, path: '', type: 'banner' },
    { image: banner6, path: '', type: 'banner' }
  ],
  service: [
    {
      image: specialist,
      headingProps: {
        content: 'Khám chuyên khoa'
      },
      path: 'service'
    },
    {
      image: remote,
      headingProps: {
        content: 'Khám từ xa'
      },
      path: 'service'
    },
    {
      image: dental,
      headingProps: {
        content: 'Khám nha khoa'
      },
      path: 'service'
    },
    {
      image: general,
      headingProps: {
        content: 'Khám tổng quát'
      },
      path: 'service'
    },
    {
      image: medicalTest,
      headingProps: {
        content: 'Xét nghiệm y tế'
      },
      path: 'service'
    },
    {
      image: mentealHeath,
      headingProps: {
        content: 'Sức khỏe tinh thần'
      },
      path: 'service'
    }
  ],

  specialist: [
    {
      image: musculoskeletal,
      headingProps: {
        content: 'Cơ xương khớp'
      },
      type: 'specialist',
      path: ''
    },
    {
      image: nerve,
      headingProps: {
        content: 'Thần kinh'
      },
      type: 'specialist',
      path: ''
    },
    {
      image: digestion,
      headingProps: {
        content: 'Tiêu hóa'
      },
      type: 'specialist',
      path: ''
    },
    {
      image: heart,
      headingProps: {
        content: 'Tim'
      },
      type: 'specialist',
      path: ''
    },
    {
      image: spine,
      headingProps: {
        content: 'Cột sống'
      },
      type: 'specialist',
      path: ''
    },
    {
      image: earNoseThroat,
      headingProps: {
        content: 'Tai, Mũi, Họng'
      },
      type: 'specialist',
      path: ''
    },
    {
      image: traditional,
      headingProps: {
        content: 'Y học cổ truyền'
      },
      type: 'specialist',
      path: ''
    },
    {
      image: acupuncture,
      headingProps: {
        content: 'Châm cứu'
      },
      type: 'specialist',
      path: ''
    },
    {
      image: musculoskeletal,
      headingProps: {
        content: 'Cơ xương khớp'
      },
      type: 'specialist',
      path: ''
    },
    {
      image: nerve,
      headingProps: {
        content: 'Thần kinh'
      },
      type: 'specialist',
      path: ''
    },
    {
      image: digestion,
      headingProps: {
        content: 'Tiêu hóa'
      },
      type: 'specialist',
      path: ''
    },
    {
      image: heart,
      headingProps: {
        content: 'Tim'
      },
      type: 'specialist',
      path: ''
    },
    {
      image: spine,
      headingProps: {
        content: 'Cột sống'
      },
      type: 'specialist',
      path: ''
    },
    {
      image: earNoseThroat,
      headingProps: {
        content: 'Tai, Mũi, Họng'
      },
      type: 'specialist',
      path: ''
    },
    {
      image: traditional,
      headingProps: {
        content: 'Y học cổ truyền'
      },
      type: 'specialist',
      path: ''
    },
    {
      image: acupuncture,
      headingProps: {
        content: 'Châm cứu'
      },
      type: 'specialist',
      path: ''
    },
    {
      image: musculoskeletal,
      headingProps: {
        content: 'Cơ xương khớp'
      },
      type: 'specialist',
      path: ''
    },
    {
      image: nerve,
      headingProps: {
        content: 'Thần kinh'
      },
      type: 'specialist',
      path: ''
    },
    {
      image: digestion,
      headingProps: {
        content: 'Tiêu hóa'
      },
      type: 'specialist',
      path: ''
    },
    {
      image: heart,
      headingProps: {
        content: 'Tim'
      },
      type: 'specialist',
      path: ''
    },
    {
      image: spine,
      headingProps: {
        content: 'Cột sống'
      },
      type: 'specialist',
      path: ''
    },
    {
      image: earNoseThroat,
      headingProps: {
        content: 'Tai, Mũi, Họng'
      },
      type: 'specialist',
      path: ''
    },
    {
      image: traditional,
      headingProps: {
        content: 'Y học cổ truyền'
      },
      type: 'specialist',
      path: ''
    },
    {
      image: acupuncture,
      headingProps: {
        content: 'Châm cứu'
      },
      type: 'specialist',
      path: ''
    }
  ],

  facilities: [
    {
      image: vietduc,
      headingProps: {
        content: 'Bệnh viện Hữu nghị Việt Đức'
      },
      type: 'facilities',
      path: ''
    },
    {
      image: choray,
      headingProps: {
        content: 'Bệnh viện Chợ Rẫy'
      },
      type: 'facilities',
      path: ''
    },
    {
      image: doctorcheck,
      headingProps: {
        content: 'Doctor Check - Tầm Soát Bệnh Viện Để Sống Thọ Hơn'
      },
      type: 'facilities',
      path: ''
    },
    {
      image: medicineAndPharmacy,
      headingProps: {
        content: 'Phòng khám Bệnh viện Đại học Y Dược 1'
      },
      type: 'facilities',
      path: ''
    },
    {
      image: hungviet,
      headingProps: {
        content: 'Bệnh viện Ung bướu Hưng Việt'
      },
      type: 'facilities',
      path: ''
    },
    {
      image: medlatec,
      headingProps: {
        content: 'Hệ thống y tế MEDLATEC'
      },
      type: 'facilities',
      path: ''
    },
    {
      image: diag,
      headingProps: {
        content: 'Trung tâm xét nghiệm Diag Laboratories '
      },
      type: 'facilities',
      path: ''
    },
    {
      image: thucuc,
      headingProps: {
        content: 'Hệ thống Y tế Thu Cúc TCI'
      },
      type: 'facilities',
      path: ''
    },
    {
      image: centalMilitary,
      headingProps: {
        content: 'Bệnh viện Nam học và Hiến muộn Hà nội'
      },
      type: 'facilities',
      path: ''
    },
    {
      image: vietduc,
      headingProps: {
        content: 'Bệnh viện Hữu nghị Việt Đức'
      },
      type: 'facilities',
      path: ''
    },
    {
      image: choray,
      headingProps: {
        content: 'Bệnh viện Chợ Rẫy'
      },
      type: 'facilities',
      path: ''
    },
    {
      image: doctorcheck,
      headingProps: {
        content: 'Doctor Check - Tầm Soát Bệnh Viện Để Sống Thọ Hơn'
      },
      type: 'facilities',
      path: ''
    },
    {
      image: medicineAndPharmacy,
      headingProps: {
        content: 'Phòng khám Bệnh viện Đại học Y Dược 1'
      },
      type: 'facilities',
      path: ''
    },
    {
      image: hungviet,
      headingProps: {
        content: 'Bệnh viện Ung bướu Hưng Việt'
      },
      type: 'facilities',
      path: ''
    },
    {
      image: medlatec,
      headingProps: {
        content: 'Hệ thống y tế MEDLATEC'
      },
      type: 'facilities',
      path: ''
    },
    {
      image: diag,
      headingProps: {
        content: 'Trung tâm xét nghiệm Diag Laboratories '
      },
      type: 'facilities',
      path: ''
    },
    {
      image: thucuc,
      headingProps: {
        content: 'Hệ thống Y tế Thu Cúc TCI'
      },
      type: 'facilities',
      path: ''
    },
    {
      image: centalMilitary,
      headingProps: {
        content: 'Bệnh viện Nam học và Hiến muộn Hà nội'
      },
      type: 'facilities',
      path: ''
    }
  ],

  doctor: [
    {
      image: doctor1,
      headingProps: {
        content: 'Phó Giáo sư, Tiến sĩ Kiều Đình Hùng'
      },
      textProps: {
        content: 'Thần kinh, cột sống, phẫu thuật thần kinh'
      },
      type: 'doctor',
      path: 'doctor'
    },
    {
      image: doctor2,
      headingProps: {
        content: 'Bác sĩ, Chuyên khoa II Trà Anh Duy'
      },
      textProps: {
        content: 'Nam khoa, Thận - Tiết niệu'
      },
      type: 'doctor',
      path: 'doctor'
    },
    {
      image: doctor3,
      headingProps: {
        content: 'Bác sĩ, bác sĩ Phạm Chi Lăng'
      },
      textProps: {
        content: 'Chấn thương cơ xương, chỉnh hình'
      },
      type: 'doctor',
      path: 'doctor'
    },
    {
      image: doctor4,
      headingProps: {
        content: 'Phó Giáo sư, Tiến sĩ, Tiến sĩ Nguyễn Văn Liễu'
      },
      textProps: {
        content: 'Thần kinh'
      },
      type: 'doctor',
      path: 'doctor'
    },
    {
      image: doctor5,
      headingProps: {
        content: 'Thầy thuốc ưu tú, bác sĩ CKII Nguyễn Tiến Lãng'
      },
      textProps: {
        content: 'Tiểu đường - Nội tiết, Ung thư, Tuyến giáp'
      },
      type: 'doctor',
      path: 'doctor'
    },
    {
      image: doctor6,
      headingProps: {
        content: 'Thạc sĩ, bác sĩ Hứa Thúy Vi'
      },
      textProps: {
        content: 'Digestion, hepatitis'
      },
      type: 'doctor',
      path: 'doctor'
    },
    {
      image: doctor7,
      headingProps: {
        content: 'Bác sĩ chuyên khoa II Nguyễn Tiến Thành'
      },
      textProps: {
        content: 'Da liễu, Da liễu thẩm mỹ'
      },
      type: 'doctor',
      path: 'doctor'
    },
    {
      image: doctor8,
      headingProps: {
        content: 'Bác sĩ, bác sĩ Vũ Thái Hà'
      },
      textProps: {
        content: 'Da liễu, Da liễu thẩm mỹ'
      },
      type: 'doctor',
      path: 'doctor'
    },
    {
      image: doctor9,
      headingProps: {
        content: 'Bác sĩ chuyên khoa I Nguyễn Tường Vũ'
      },
      textProps: {
        content: 'Thần kinh, Phẫu thuật thần kinh'
      },
      type: 'doctor',
      path: 'doctor'
    },
    {
      image: doctor10,
      headingProps: {
        content: 'Bác sĩ chuyên khoa I Phan Vương Huy Đông'
      },
      textProps: {
        content: 'Chấn thương cơ xương, chỉnh hình'
      },
      type: 'doctor',
      path: 'doctor'
    },
    {
      image: doctor11,
      headingProps: {
        content: 'Phó Giáo sư, Tiến sĩ, Tiến sĩ Nguyễn Trọng Hùng'
      },
      textProps: {
        content: 'Thần kinh'
      },
      type: 'doctor',
      path: 'doctor'
    },
    {
      image: doctor12,
      headingProps: {
        content: 'Bác sĩ, Chuyên khoa II Trà Anh Duy'
      },
      textProps: {
        content: 'Nam khoa, Thận - Tiết niệu'
      },
      type: 'doctor',
      path: 'doctor'
    }
  ],
  icon: [],
  handbook: [
    {
      image: handbook1,
      headingProps: {
        content:
          'Mất bao nhiêu tiền để loại bỏ vĩnh viễn quầng thâm quanh mắt? Bảng giá dịch vụ 5 địa chỉ tốt ở Hà Nội'
      },
      type: 'handbook'
    },
    {
      image: handbook2,
      headingProps: {
        content:
          'Chi phí điều trị nám bằng laser bao nhiêu tiền? Bảng giá tại 6 địa chỉ uy tín tại Hà Nội'
      },
      type: 'handbook'
    },
    {
      image: handbook3,
      headingProps: {
        content:
          'Tiêm Profhilo giá bao nhiêu? Chi phí tiêm Profhilo tại 3 địa chỉ uy tín tại Hà Nội'
      },
      type: 'handbook'
    },
    {
      image: handbook4,
      headingProps: {
        content: 'Xóa thâm quầng mắt ở TP.HCM giá bao nhiêu?'
      },
      type: 'handbook'
    },
    {
      image: handbook5,
      headingProps: {
        content:
          'HiFu căng da mặt có đắt không? Chi phí nâng cấp HiFu tại 5 địa chỉ uy tín tại Hà Nội'
      },
      type: 'handbook'
    },
    {
      image: handbook6,
      headingProps: {
        content:
          'Thang máy Hifu giá bao nhiêu? Chi phí tại 6 địa chỉ uy tín tại TP.HCM'
      },
      type: 'handbook'
    },
    {
      image: handbook7,
      headingProps: {
        content: 'Top 6 địa chỉ trẻ hóa da uy tín tại Hà Nội'
      },
      type: 'handbook'
    },
    {
      image: handbook8,
      headingProps: {
        content: 'Top 7 địa chỉ trị nám tốt ở Hà Nội'
      },
      type: 'handbook'
    },
    {
      image: handbook9,
      headingProps: {
        content: 'Top 7 địa chỉ trẻ hóa da uy tín tại TP.HCM'
      },
      type: 'handbook'
    },
    {
      image: handbook1,
      headingProps: {
        content:
          'Mất bao nhiêu tiền để loại bỏ vĩnh viễn quầng thâm quanh mắt? Bảng giá dịch vụ 5 địa chỉ tốt ở Hà Nội'
      },
      type: 'handbook'
    },
    {
      image: handbook2,
      headingProps: {
        content:
          'Chi phí điều trị nám bằng laser bao nhiêu tiền? Bảng giá tại 6 địa chỉ uy tín tại Hà Nội'
      },
      type: 'handbook'
    },
    {
      image: handbook3,
      headingProps: {
        content:
          'Tiêm Profhilo giá bao nhiêu? Chi phí tiêm Profhilo tại 3 địa chỉ uy tín tại Hà Nội'
      },
      type: 'handbook'
    },
    {
      image: handbook4,
      headingProps: {
        content: 'Xóa thâm quầng mắt ở TP.HCM giá bao nhiêu?'
      },
      type: 'handbook'
    },
    {
      image: handbook5,
      headingProps: {
        content:
          'HiFu căng da mặt có đắt không? Chi phí nâng cấp HiFu tại 5 địa chỉ uy tín tại Hà Nội'
      },
      type: 'handbook'
    },
    {
      image: handbook6,
      headingProps: {
        content:
          'Thang máy Hifu giá bao nhiêu? Chi phí tại 6 địa chỉ uy tín tại TP.HCM'
      },
      type: 'handbook'
    },
    {
      image: handbook7,
      headingProps: {
        content: 'Top 6 địa chỉ trẻ hóa da uy tín tại Hà Nội'
      },
      type: 'handbook'
    },
    {
      image: handbook8,
      headingProps: {
        content: 'Top 7 địa chỉ trị nám tốt ở Hà Nội'
      },
      type: 'handbook'
    },
    {
      image: handbook9,
      headingProps: {
        content: 'Top 7 địa chỉ trẻ hóa da uy tín tại TP.HCM'
      },
      type: 'handbook'
    }
  ],

  footer: [
    {
      type: 'footer',
      image: tiktok,
      path: ''
    },
    {
      type: 'footer',
      image: facebook,
      path: ''
    },
    {
      type: 'footer',
      image: youtube,
      path: ''
    }
  ],
  media: [
    {
      type: 'media',
      image: vtv1,
      path: ''
    },
    {
      type: 'media',
      image: ictnews,
      path: ''
    },
    {
      type: 'media',
      image: vnexpress,
      path: ''
    },
    {
      type: 'media',
      image: vtcnews,
      path: ''
    },
    {
      type: 'media',
      image: cuccntt,
      path: ''
    },
    {
      type: 'media',
      image: infonet,
      path: ''
    },
    {
      type: 'media',
      image: dantri,
      path: ''
    },
    {
      type: 'media',
      image: vtv1,
      path: ''
    }
  ]
}

export default LIST_LINKS
