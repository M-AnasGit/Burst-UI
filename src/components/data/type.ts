type headerType =
    | string
    | {
          key: string;
          sortable: boolean;
      };

type tableStyle = 'normal' | 'striped';
