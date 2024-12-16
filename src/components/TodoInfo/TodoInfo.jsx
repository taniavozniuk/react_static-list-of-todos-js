// Add the required props

export const TodoInfo = ({ todos }) => (
  <>
    <article
      className={`TodoInfo TodoInfo--${todos.completed ? 'completed' : 'pending'}`}
    >
      <h2 className="TodoInfo__title">{todos.title}</h2>

      <a className="UserInfo" href="mailto:Sincere@april.biz">
        Leanne Graham
      </a>
    </article>

    <article className="TodoInfo TodoInfo--completed">
      <h2 className="TodoInfo__title">CSS</h2>

      <a className="UserInfo" href="mailto:Sincere@april.biz">
        Leanne Graham
      </a>
    </article>
  </>
);
