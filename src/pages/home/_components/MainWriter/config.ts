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
      tags: ['YB', 'DNFJ'],
      imgUrl: '',
    },
  ],
  design: [
    {
      name: '강서현',
      part: '디자인',
      description: '매일이 졸려요',
      tags: ['DMFJ', '캔디팟'],
      imgUrl: '',
    },
    {
      name: '김민서',
      part: '디자인',
      description: '7-8시간은 자야 건강하다는데.. 종강시켜주세요..졸전 더서울라이티움 11월 20일 더보기..',
      tags: ['OB', 'DMFJ', '캔디팟'],
      imgUrl: '',
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
      imgUrl: '',
    },
    {
      name: '유태승',
      part: '웹',
      description: '웹파트 막내를 담당하고있는 유태승입니다.',
      tags: ['YB', 'ISTJ', 'DNLJ'],
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
      imgUrl:
        'https://github-production-user-asset-6210df.s3.amazonaws.com/84909012/333190253-0b413dfe-a006-49e5-831e-79620f4842ce.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240524%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240524T050440Z&X-Amz-Expires=300&X-Amz-Signature=bde405d4c758df2ea54704217d9d2beb8e6bec31fd84f557109372b680039b26&X-Amz-SignedHeaders=host&actor_id=59465914&key_id=0&repo_id=796982740',
    },
    {
      name: '남궁찬',
      part: '서버',
      description: '엔믹스야 제발 가을 축제 와주라.',
      tags: ['OB', 'BNFP'],
      imgUrl: '',
    },
  ],
};
