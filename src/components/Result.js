import React from 'react'
import { Card } from "antd";
import 'antd/dist/antd.css';
import {
	EditOutlined,
	EllipsisOutlined,
	SettingOutlined
} from "@ant-design/icons";
const { Meta } = Card;

function Result({ result, openPopup }) {
	return (
		<div className="result" onClick={() => openPopup(result.imdbID)}>
			<Card
				hoverable
				style={{ width: 240 }}
				cover={
					<img
						width='240'
						height="350"
						alt="example"
						src={result.Poster}
					/>
				}
			>
				<Meta title={result.Title} description="Informacion de la motocicleta" />
			</Card>
		</div>
	)
}

export default Result
