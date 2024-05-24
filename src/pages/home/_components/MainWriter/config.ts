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
      tags: ['YB'],
      imgUrl: '/img/profile/plan-minseo.jpeg',
    },
    {
      name: '박록주',
      part: '기획',
      description: '',
      tags: ['YB', 'DNFJ'],
      imgUrl: '/img/profile/rokju.jpeg',
    },
  ],
  design: [
    {
      name: '강서현',
      part: '디자인',
      description: '매일이 졸려요',
      tags: ['DMFJ', '캔디팟'],
      imgUrl: '/img/profile/seohyun.jpg',
    },
    {
      name: '김민서',
      part: '디자인',
      description: '7-8시간은 자야 건강하다는데.. 종강시켜주세요..졸전 더서울라이티움 11월 20일 더보기..',
      tags: ['OB', 'DMFJ', '캔디팟'],
      imgUrl: '/img/profile/design-minseo.jpg',
    },
    {
      name: '이윤민',
      part: '디자인',
      description: '휴학하고 솝트할걸. 휴학하고 솝트할걸 휴학하고 솝트할걸 휴학,,',
      tags: ['YB', 'DMFJ', '캔디팟'],
      imgUrl: '/img/profile/yoonmin.jpg',
    },
  ],
  web: [
    {
      name: '최민준',
      part: '웹',
      description: '요오정도오',
      tags: ['YB', 'DNFJ'],
      imgUrl: '/img/profile/minjun.jpg',
    },
    {
      name: '유태승',
      part: '웹',
      description: '웹파트 막내를 담당하고있는 유태승입니다.',
      tags: ['YB', 'ISTJ', 'DNLJ', '태솝찢'],
      imgUrl: '/img/profile/taeseung.jpg',
    },
    {
      name: '정도영',
      part: '웹',
      description: '난 우울할 때 우웅 ~',
      tags: ['YB', 'BNFJ', '우웅'],
      imgUrl: '/img/profile/doyeong.png',
    },
    {
      name: '정보운',
      part: '웹',
      description: '너가 축제에 뉴진스오는데 팀플때문에 못가는 심정을 알아?',
      tags: ['YB', 'BMFP'],
      imgUrl: '/img/profile/bowoon.jpeg',
    },
  ],
  server: [
    {
      name: '문채영',
      part: '서버',
      description: '사랑하는 사람 이름 부르고 하강! 합세 웹1조야!',
      tags: ['YB', 'BMLJ', '기디웹서짱'],
      imgUrl: '/img/profile/chaeyeong.jpg',
    },
    {
      name: '남궁찬',
      part: '서버',
      description: '엔믹스야 제발 가을 축제 와주라.',
      tags: ['OB', 'BNFP'],
      imgUrl: '/img/profile/chan.jpg',
    },
  ],
};
