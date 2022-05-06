import renderer from "react-test-renderer";
import Link from "./Link";

// スナップショットテスト
//スナップショットのUIと違うUIになった場合にFAILにする
it("hover時のクラス変更", () => {
  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>
  );
  //通常時のスナップショットを作成
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  //ホバー時のスナップショットを作成
  //hooksを使用しているときはactを使う
  renderer.act(() => {
    //@ts-ignore
    tree.props.onMouseEnter();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // ホバー解除時のスナップショットを作成
  renderer.act(() => {
    //@ts-ignore
    tree.props.onMouseLeave();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
