export interface ProfileCardProps {
  imgUrl: string;
  name: string;
  part: string;
  description: string;
  tags: string[];
}

interface MemberData {
  plan: ProfileCardProps[];
  design: ProfileCardProps[];
  web: ProfileCardProps[];
  server: ProfileCardProps[];
}

export const memberDataList: MemberData = {
  plan: [
    {
      name: '김민서',
      part: '기획',
      description: '',
      tags: [],
      imgUrl: '',
    },
    {
      name: '박록주',
      part: '기획',
      description: '',
      tags: [],
      imgUrl: '',
    },
  ],
  design: [
    {
      name: '강서현',
      part: '디자인',
      description: '',
      tags: [],
      imgUrl: '',
    },
    {
      name: '김민서',
      part: '디자인',
      description: '',
      tags: [],
      imgUrl: '',
    },
    {
      name: '이윤민',
      part: '디자인',
      description: '',
      tags: [],
      imgUrl: '',
    },
  ],
  web: [
    {
      name: '최민준',
      part: '웹',
      description: '',
      tags: [],
      imgUrl: '',
    },
    {
      name: '유태승',
      part: '웹',
      description: '안녕하세요, 서버파트 막내를 담당하고있는 유태승입니다.',
      tags: ['YB', 'ISTJ', 'DNLJ'],
      imgUrl: 'img/profile/taeseung.jpg',
    },
    {
      name: '정도영',
      part: '웹',
      description: '',
      tags: [],
      imgUrl: '',
    },
    {
      name: '정보운',
      part: '웹',
      description: '',
      tags: [],
      imgUrl: '',
    },
  ],
  server: [
    {
      name: '문채영',
      part: '서버',
      description: '',
      tags: [],
      imgUrl: '',
    },
    {
      name: '남궁찬',
      part: '서버',
      description: '',
      tags: [],
      imgUrl: '',
    },
  ],
};
