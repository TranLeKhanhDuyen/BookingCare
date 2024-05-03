import { Meta, StoryObj } from '@storybook/react'
import CustomSlider from './Slider';
// import image1 from '@assets/facilities/cho-ray.jpg'
// import image2 from '@assets/facilities/diag.png'
// import image3 from '@assets/facilities/doctor-check.png'

import banner1 from '@assets/banners/banner-1.png'
import banner2 from '@assets/banners/banner-2.jpg'
import banner3 from '@assets/banners/banner-3.png'
import banner4 from '@assets/banners/banner-4.png'
import banner5 from '@assets/banners/banner-5.png'
import banner6 from '@assets/banners/banner-6.jpg'

export default {
  title: 'Components/CustomSlider',
  component: CustomSlider,
  tags: ['autodocs'],
} as Meta

type Story = StoryObj<typeof CustomSlider>;

export const Default: Story = {
  args: {
    items: [
      {
        image: banner1,
      },
      {
        image: banner2,
      },
      {
        image: banner3,
      },
      {
        image: banner4
      },
      {
        image: banner5
      },
      {
        image: banner6
      },
    ],
    types: 'banner'
  }
  //   items: [
  //     {
  //       image: image1,
  //       title: 'Title 1',
  //       description: 'Description 1',
  //       variant: 'primary',
  //       width: '329px',
  //       height: '157px',
  //     },
  //     {
  //       image: image2,
  //       title: 'Title 2',
  //       description: 'Description 2',
  //       variant: 'primary',
  //       width: '329px',
  //       height: '157px'
  //     },
  //     {
  //       image: image3,
  //       title: 'Title 3',
  //       description: 'Description 3',
  //       variant: 'primary',
  //       width: '329px',
  //       height: '157px'
  //     },
  //     {
  //       image: image2,
  //       title: 'Title 3',
  //       description: 'Description 3',
  //       variant: 'primary',
  //       width: '329px',
  //       height: '157px'
  //     },
  //     {
  //       image: image1,
  //       title: 'Title 3',
  //       description: 'Description 3',
  //       variant: 'primary',
  //       width: '329px',
  //       height: '157px'
  //     },
  //     {
  //       image: image1,
  //       title: 'Title 3',
  //       description: 'Description 3',
  //       variant: 'primary',
  //       width: '329px',
  //       height: '157px'
  //     },
  //   ],
  //   types: 'banner'
  // }
}
