
import React from 'react'


const ApplyContentStyles = ({htmlContent}) => {

    console.log("htmlCOntent" +htmlContent);

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}
export default ApplyContentStyles
