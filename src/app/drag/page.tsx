import {
  SortableElement,
  SortableContainer,
  SortableHandle,
  arrayMove,
} from "react-sortable-hoc";

const DragHandle = SortableHandle(() => <span>:1:</span>); // This can be any component you want

const SortableItem = SortableElement(({ value }: any) => (
  <div>
    <DragHandle />
    {value}
  </div>
));

const SortableList = SortableContainer(({ items }: any) => {
  return (
    <div>
      {items.map((value: any, index: any) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
      <div
        id="sortable-placeholder"
        style={{ height: "50px", boxShadow: "0px 0px 10px #888888" }}
      ></div>
    </div>
  );
});

class SortableComponent extends React.Component {
  state = {
    items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"],
  };

  onSortEnd = ({ oldIndex, newIndex }: any) => {
    this.setState(({ items }: any) => ({
      items: arrayMove(items, oldIndex, newIndex),
    }));

    const placeholder = document.getElementById("sortable-placeholder");
    placeholder.style.order = newIndex;
  };

  render() {
    return (
      <SortableList
        items={this.state.items}
        onSortEnd={this.onSortEnd}
        useDragHandle
      />
    );
  }
}

export default SortableComponent;
