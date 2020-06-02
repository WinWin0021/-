import React, {Fragment} from 'react';
import { Checkbox } from 'antd';
import '../App.css';
import 'antd/dist/antd.css'

class PictureSelect extends React.Component{
    constructor(props) {
        super(props);
		}
		onChange=(e)=>{
			const {value=[]}=this.props
			const arr=value.slice();
			if(e.target.checked){
				arr.push(e.target.value)
			}else if(!e.target.checked){
				arr.splice(arr.indexOf(e.target.value),1)
			}
			this.props.onChange(arr)
		}
		chooseAllChange=(e)=>{
			const {pictures=[]}=this.props;
			const arr=[]
			pictures.slice().map((item,index)=>
				arr.push(item.id)
			)
			if(e.target.checked){
				this.props.onChange(arr)
			}else {
				this.props.onChange([])
			}
		}
		render() {
			const {pictures=[],value=[]}=this.props
			return (
				<Fragment >
					<p>	<Checkbox checked={value.length===pictures.length} onChange={this.chooseAllChange} />共选择{value.length}项</p>
					<div className='container'>
						{
							pictures.map((item,index) => {
								return(
									<div key={item.id} className="checkContainer" >
											<img src={item.url}/>
											<Checkbox className="checkBox" onChange={this.onChange} value={item.id} checked={value.includes(item.id)}/>
									</div>
								)
							})
						}
						</div>
				</ Fragment>
			);
		}
}

export default PictureSelect;