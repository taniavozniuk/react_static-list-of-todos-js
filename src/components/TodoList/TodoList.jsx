// Add the required props
import UserInfo from '../UserInfo';

export const TodoList = ({ todos }) => (
  <section className="TodoList">
    <article
      className={`TodoInfo TodoInfo--${todos.completed ? 'completed' : 'pending'}`}
    >
      <h2 className="TodoInfo__title">{todos.title}</h2>

      <UserInfo />
    </article>
  </section>
);
