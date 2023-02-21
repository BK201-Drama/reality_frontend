import { Table, TableProps } from 'antd'
import _ from 'lodash';
import { FC } from 'react';

function RTablePropConfig<T>(tableProps?: TableProps<T>) {
  return {
    ...tableProps,
    pagination: !_.isBoolean(tableProps?.pagination) ? {
      className: '',
      showTotal: (total: number) => (
        <div>
          共<span>{total}</span>个数据
        </div>
      ),
      showQuickJumper: true,
      showSizeChanger: true,
      position: ['bottomCenter'],
      ...tableProps?.pagination,
    } : tableProps?.pagination,
  }
}

interface ITable {
  rowKey?: string;
  columns?: any[];
  tableProps?: any
}
const RTable: FC<ITable> = ({ rowKey, columns, tableProps }) => {
  const dataSource = (RTablePropConfig(tableProps ?? {})?.dataSource ?? []) as any[]
  const realTableProps = (RTablePropConfig(tableProps ?? {}) ?? {}) as any
  return (
    <Table rowKey={rowKey ?? ''} columns={columns ?? []} dataSource={dataSource} {...realTableProps} className="w-[1000px]" />
  )
}

export default RTable