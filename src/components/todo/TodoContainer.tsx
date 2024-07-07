// import { useAppSelector } from "@/redux/hook";
import { useState } from "react";
import { AddTodoModal } from "./AddTodoModal";

import { TodoCard } from "./TodoCard";
import { TodoFilter } from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";

export const TodoContainer = () => {
  // From Local State
  // const { todos } = useAppSelector((state) => state.todos);

  const [priority, setPriority] = useState("");

  // From server
  const { data: todos, isLoading, isError } = useGetTodosQuery(priority);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal></AddTodoModal>
        <TodoFilter priority={priority} setPriority={setPriority}></TodoFilter>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px]">
        <div className="bg-white p-5 w-full h-full space-y-3 rounded-lg">
          {todos?.data?.map((item) => (
            <TodoCard {...item}></TodoCard>
          ))}
        </div>
        {/* <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center rounded-md">
          <p>There is no task pending</p> */}
        {/* </div> */}
      </div>
    </div>
  );
};
