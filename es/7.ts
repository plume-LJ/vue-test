type Format320 = { urls: { format320p: string } };
type Format480 = { urls: { format480p: string } };
type Format720 = { urls: { format720p: string } };
type Format1080 = { urls: { format1080p: string } };

type BasicVideoData = {};

type Video = BasicVideoData & (Format320 | Format480 | Format720 | Format1080);
type UnionToIntersection<T> = (T extends any ? (x: T) => any : never) extends (
  x: infer R
) => any
  ? R
  : never;

type Intersected = UnionToIntersection<Video["urls"]>;

// 等价于

type Intersected1 = UnionToIntersection<
  | { format320p: string }
  | { format480p: string }
  | { format720p: string }
  | { format1080p: string }
>;

// 我们有了一个裸类型, 这意味着
// 我们可以做并集的交集操作：

type Intersected2 =
  | UnionToIntersection<{ format320p: string }>
  | UnionToIntersection<{ format480p: string }>
  | UnionToIntersection<{ format720p: string }>
  | UnionToIntersection<{ format1080p: string }>;

// 展开...

type Intersected3 = (
  { format320p: string } extends any
    ? (x: { format320p: string }) => any
    : never
) extends (x: infer R) => any
  ? R
  :
      | never
      | ({ format480p: string } extends any
          ? (x: { format480p: string }) => any
          : never) extends (x: infer R) => any
  ? R
  :
      | never
      | ({ format720p: string } extends any
          ? (x: { format720p: string }) => any
          : never) extends (x: infer R) => any
  ? R
  :
      | never
      | ({ format1080p: string } extends any
          ? (x: { format1080p: string }) => any
          : never) extends (x: infer R) => any
  ? R
  : never;

// conditional one!

type Intersected4 =
  | ((x: { format320p: string }) => any extends (x: infer R) => any ? R : never)
  | ((x: { format480p: string }) => any extends (x: infer R) => any ? R : never)
  | ((x: { format720p: string }) => any extends (x: infer R) => any ? R : never)
  | ((x: {
      format1080p: string;
    }) => any extends (x: infer R) => any ? R : never);

// conditional two!, inferring R!
type Intersected5 =
  | { format320p: string }
  | { format480p: string }
  | { format720p: string }
  | { format1080p: string };

// 但是等等! `R` 从一个逆变位置 inferred
//我做了一个交集, 否则我丢失了类型兼容性

type Intersected6 = { format320p: string } & { format480p: string } & {
  format720p: string;
} & { format1080p: string };

type a = string & number;
type IntersectionToUnion<T> = T extends () => infer R ? R : never;
type aa = IntersectionToUnion<a>;
type aaa = Readonly<BasicVideoData>