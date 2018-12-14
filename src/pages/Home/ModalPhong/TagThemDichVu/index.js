  import React from "react";
  import { Form,Modal, Col, Row,List,Avatar,Spin,Table, Button,Tag, Input, Tooltip, Icon} from "antd";
  ///import datphong from "../../../reducers/datphong";
  import { Form as ReduxForm, Field, reduxForm  } from "redux-form";
  //import CustomInput from "../../../component/CustomInput";
  import { GET_LIST_DICHVU_REQUEST } from "../../../../actions/contstants";
  import { getListDVRequest } from "../../../../actions/dichvu";

  const CheckableTag = Tag.CheckableTag;
  const tagsFromServer = ['Movies', 'Books', 'Music', 'Sports'];
    
class TagThemDichVu extends React.Component {
   state = {
        selectedTags: [],
      };
    
      handleChange(tag, checked) {
        const { selectedTags } = this.state;
        const nextSelectedTags = checked
          ? [...selectedTags, tag]
          : selectedTags.filter(t => t !== tag);
        console.log('You are interested in: ', nextSelectedTags);
        this.setState({ selectedTags: nextSelectedTags });
      }
    
      render() {
        const { selectedTags } = this.state;
        return (
          <div>
            <h6 style={{ marginRight: 8, display: 'inline' }}>Categories:</h6>
            {tagsFromServer.map(tag => (
              <CheckableTag
                key={tag}
                checked={selectedTags.indexOf(tag) > -1}
                onChange={checked => this.handleChange(tag, checked)}
              >
                {tag}
              </CheckableTag>
            ))}
          </div>
        );
      }
    }
  export default TagThemDichVu;