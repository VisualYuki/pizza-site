@extends("admin.layouts.main")

@section("content")
    <table class="table table-bordered">
        <thead>
        <tr>
            <th style="width: 10px">id</th>
            <th>Name</th>
            <th>Desc</th>
            <th>Price</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        @foreach($products as $product)
            <tr>
                <td>{{$product->id}}</td>
                <td>{{$product->name}}</td>
                <td>
                    {{$product->desc}}
                </td>
                <td>{{$product->price}} Rub.</td>
                <td>
                    <a href="{{route('administrator-product-edit', ["id" => $product->id]) }}">edit</a>
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
    <a href="{{route("administrator-product-create")}}" class="btn btn-primary">
        Create product
    </a>
@endsection
