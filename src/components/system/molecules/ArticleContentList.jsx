const ContentList = ({ contentList }) => (
  <>
    {contentList.content && (
      <div className="db-body-text">{contentList.content}</div>
    )}
    {contentList.list?.length > 0 && (
      <ul className="db-body-text db-body-text-ul">
        {contentList.list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    )}
  </>
);

export default ContentList;
