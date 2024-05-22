export const initialData = {
  bookOverview: [
    {
      id: 11,
      title: '회색 인간',
      bookImage: 'public/assets/images/cover.png',
      authorName: '김동식',
      authorDescription:
        '<회색인간>, <13일의 김남우>, <세상에서 가장 약한 요괴>, <양심 고백>, <정말 미안하지만, 나는 아무렇지도 않았다> 저자. 카카오페이지 <살인자의 정석> 연재.',
      job: '소설가',
      subscriber: 1233,
      episode: 16,
      requiredTime: 114,
      isLiked: true,
      likeCount: 1010,
      recommendation: '농담처럼 가볍게 읽히지만, 한참을 곱씹게 만드는 매력이 있는 짧은 소설들',
      bookDescription:
        "작가 김동식은 10년 동안 공장에서 노동하면서 머릿속으로 수없이 떠올렸던 이야기들을 '오늘의 유머' 공포 게시판에 올렸다. 그렇게 써내려 간 300여 편의 짧은 소설 가운데 주요 작품을 추려 <회색 인간> <세상에서 가장 약한 요괴> <13일의 김남우> <양심 고백> <정말 미안하지만, 나는 아무렇지도 않았다>를 펴냈다. 갑자기 펼쳐지는 기묘한 상황, 그에 대응하는 인간들의 행태는 우리가 예상치 못한 방향으로 전개되며 이야기에 빠져들게 한다.",
      tag: '소설, 단편소설, 노인',
    },
  ],
  bookChapter: [
    {
      id: 2,
      bookId: 11,
      imageUrl: 'public/assets/images/cover.png',
      title: '무인도의 부자노인',
      content: '바다 한가운데에서 배가 침몰했다. 운이 좋아 살아남은 사람들은 한 무인도의 해변에서 깨어났다.',
      requiredTime: 17,
      commentCount: 15,
    },
    {
      id: 3,
      bookId: 11,
      imageUrl: null,
      title: '시험 성적을 한 번에 올리는 비법',
      content:
        '고등학생 A군은 같은 반 B군이 의심스러웠다. 어떻게 갑자기 성적을 그렇게 올렸을까?\n분명 자신처럼 평범 이하의 성적을 유지하던 녀석이, 어느 날 갑자기 전교권에서 놀다니?',
      requiredTime: 30,
      commentCount: 11,
    },
  ],
};

export const articleInitialData = [
  {
    chapterId: '1',
    chapterTitle: '무인도의 부자 노인',
    content:
      '바다 한가운데에서 배가 침몰했다. 운이 좋아 살아남은 사람들은 한 무인도의 해변에서 깨어났다.이미 죽어 시신이 된 사람들을 제외하면, 살아 있는 사람들은 10여명. 어떤 사람은 멍하니 주저않았다. 그러나 나는 살아 남앗다.',
    chapterImage: 'public/assets/images/book.jpeg',
    chapterRuntime: '1분',
  },
  {
    chapterId: '1',
    chapterTitle: '무인도의 부자 노인',
    content:
      '바다 한가운데에서 배가 침몰했다. 운이 좋아 살아남은 사람들은 한 무인도의 해변에서 깨어났다.이미 죽어 시신이 된 사람들을 제외하면, 살아 있는 사람들은 10여명. 어떤 사람은 멍하니 주저않았다. 그러나 나는 살아 남앗다.',
    chapterImage: 'public/assets/images/book.jpeg',
    chapterRuntime: '1분',
  },
  {
    chapterId: '1',
    chapterTitle: '무인도의 부자 노인',
    content:
      '바다 한가운데에서 배가 침몰했다. 운이 좋아 살아남은 사람들은 한 무인도의 해변에서 깨어났다.이미 죽어 시신이 된 사람들을 제외하면, 살아 있는 사람들은 10여명. 어떤 사람은 멍하니 주저않았다. 그러나 나는 살아 남앗다.',
    chapterImage: 'public/assets/images/book.jpeg',
    chapterRuntime: '1분',
  },
];
