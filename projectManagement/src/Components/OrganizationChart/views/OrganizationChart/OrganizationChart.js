import React from 'react'
import { Tree, TreeNode } from 'react-organizational-chart';


const OrganizationChart = () => {
    return (
        <>
            <Tree
                label="Root"
                lineBorderRadius="10px"
                lineColor="green"
                lineHeight="30px"
                lineStyle="dotted"
                lineWidth="3px"
            >
                <TreeNode label={<div>Child 1</div>}>
                    <TreeNode label={<div>Grand Child</div>} />
                </TreeNode>
                <TreeNode label={<div>Child 2</div>}>
                    <TreeNode label={<div>Grand Child</div>}>
                        <TreeNode label={<div>Great Grand Child 1</div>} />
                        <TreeNode label={<div>Great Grand Child 2</div>} />
                    </TreeNode>
                </TreeNode>
                <TreeNode label={<div>Child 3</div>}>
                    <TreeNode label={<div>Grand Child 1</div>} />
                    <TreeNode label={<div>Grand Child 2</div>} />
                </TreeNode>
            </Tree>
        </>
    )
}

export default OrganizationChart